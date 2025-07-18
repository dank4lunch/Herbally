import { type NextRequest, NextResponse } from "next/server"

interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CustomerInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
  specialInstructions?: string
}

interface DeliverySchedule {
  date: string
  timeSlot: string
  deliveryFee: number
}

interface Order {
  id: string
  trackingNumber: string
  status: string
  statusHistory: Array<{
    status: string
    timestamp: string
    description: string
  }>
  customer: CustomerInfo
  items: OrderItem[]
  total: number
  paymentMethod: string
  bankReference?: string
  deliverySchedule?: DeliverySchedule
  createdAt: string
  estimatedDelivery: string
}

// In-memory storage for demo (use database in production)
const orders: Map<string, Order> = new Map()

function generateOrderId(): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 5).toUpperCase()
  return `ORD-${timestamp}-${random}`
}

function generateTrackingNumber(): string {
  const random1 = Math.random().toString(36).substring(2, 10)
  const random2 = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `TRK-${random1}-${random2}`
}

function generateBankReference(): string {
  const timestamp = Date.now().toString().slice(-8)
  const random = Math.random().toString(36).substring(2, 4).toUpperCase()
  return `HRB${timestamp}${random}`
}

function getEstimatedDelivery(deliverySchedule?: DeliverySchedule): string {
  if (deliverySchedule?.date) {
    return deliverySchedule.date
  }

  // Default to 2 days from now if no schedule provided
  const now = new Date()
  const deliveryDate = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000)
  return deliveryDate.toISOString()
}

function getTimeSlotLabel(timeSlot: string): string {
  const timeSlots: Record<string, string> = {
    morning: "9:00 AM - 12:00 PM",
    afternoon: "12:00 PM - 5:00 PM",
    evening: "5:00 PM - 8:00 PM",
    express: "Within 2 hours",
  }
  return timeSlots[timeSlot] || timeSlot
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, total, customer, paymentMethod, deliverySchedule } = body

    // Validate required fields
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ success: false, error: "Items are required" }, { status: 400 })
    }

    if (!customer || !customer.firstName || !customer.lastName || !customer.email) {
      return NextResponse.json({ success: false, error: "Customer information is required" }, { status: 400 })
    }

    if (!deliverySchedule || !deliverySchedule.date || !deliverySchedule.timeSlot) {
      return NextResponse.json({ success: false, error: "Delivery schedule is required" }, { status: 400 })
    }

    const orderId = generateOrderId()
    const trackingNumber = generateTrackingNumber()
    const bankReference = paymentMethod === "bank_transfer" ? generateBankReference() : undefined
    const now = new Date().toISOString()

    // Calculate total with delivery fee
    const orderTotal = total + deliverySchedule.deliveryFee

    const order: Order = {
      id: orderId,
      trackingNumber,
      status: paymentMethod === "bank_transfer" ? "pending_payment" : "confirmed",
      statusHistory: [
        {
          status: paymentMethod === "bank_transfer" ? "pending_payment" : "confirmed",
          timestamp: now,
          description:
            paymentMethod === "bank_transfer"
              ? "Order placed - awaiting payment confirmation"
              : "Order confirmed and payment received",
        },
      ],
      customer,
      items,
      total: orderTotal,
      paymentMethod,
      bankReference,
      deliverySchedule,
      createdAt: now,
      estimatedDelivery: getEstimatedDelivery(deliverySchedule),
    }

    // Store order (in production, save to database)
    orders.set(orderId, order)
    orders.set(trackingNumber, order) // Also store by tracking number for easy lookup

    console.log("Order created:", order)

    return NextResponse.json({
      success: true,
      order: {
        id: orderId,
        trackingNumber,
        bankReference,
        status: order.status,
        estimatedDelivery: order.estimatedDelivery,
        deliverySchedule: {
          date: deliverySchedule.date,
          timeSlot: deliverySchedule.timeSlot,
          timeSlotLabel: getTimeSlotLabel(deliverySchedule.timeSlot),
          deliveryFee: deliverySchedule.deliveryFee,
        },
      },
    })
  } catch (error) {
    console.error("Order creation error:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const orderId = searchParams.get("orderId")
    const trackingNumber = searchParams.get("trackingNumber")

    if (!orderId && !trackingNumber) {
      return NextResponse.json({ success: false, error: "Order ID or tracking number is required" }, { status: 400 })
    }

    const searchKey = orderId || trackingNumber
    const order = orders.get(searchKey!)

    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 })
    }

    // Add time slot label for display
    const orderWithLabels = {
      ...order,
      deliverySchedule: order.deliverySchedule
        ? {
            ...order.deliverySchedule,
            timeSlotLabel: getTimeSlotLabel(order.deliverySchedule.timeSlot),
          }
        : undefined,
    }

    return NextResponse.json({ success: true, order: orderWithLabels })
  } catch (error) {
    console.error("Order lookup error:", error)
    return NextResponse.json({ error: "Failed to fetch order" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderId, status, description } = body

    if (!orderId || !status) {
      return NextResponse.json({ success: false, error: "Order ID and status are required" }, { status: 400 })
    }

    const order = orders.get(orderId)
    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 })
    }

    // Update order status
    order.status = status
    order.statusHistory.push({
      status,
      timestamp: new Date().toISOString(),
      description: description || `Order status updated to ${status}`,
    })

    // Update both storage keys
    orders.set(orderId, order)
    orders.set(order.trackingNumber, order)

    return NextResponse.json({ success: true, order })
  } catch (error) {
    console.error("Order update error:", error)
    return NextResponse.json({ success: false, error: "Failed to update order" }, { status: 500 })
  }
}
