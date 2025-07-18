"use client"

import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Clock, CalendarIcon, Truck } from "lucide-react"

interface TimeSlot {
  id: string
  label: string
  time: string
  available: boolean
  price: number
}

interface DeliverySchedule {
  date: Date | undefined
  timeSlot: string
  deliveryFee: number
}

interface DeliverySchedulerProps {
  onScheduleChange: (schedule: DeliverySchedule) => void
  selectedSchedule: DeliverySchedule
}

const timeSlots: TimeSlot[] = [
  {
    id: "morning",
    label: "Morning Delivery",
    time: "9:00 AM - 12:00 PM",
    available: true,
    price: 50,
  },
  {
    id: "afternoon",
    label: "Afternoon Delivery",
    time: "12:00 PM - 5:00 PM",
    available: true,
    price: 50,
  },
  {
    id: "evening",
    label: "Evening Delivery",
    time: "5:00 PM - 8:00 PM",
    available: true,
    price: 75,
  },
  {
    id: "express",
    label: "Express Delivery",
    time: "Within 2 hours",
    available: true,
    price: 150,
  },
]

export function DeliveryScheduler({ onScheduleChange, selectedSchedule }: DeliverySchedulerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(selectedSchedule.date)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(selectedSchedule.timeSlot)

  // Get available dates (next 7 days, excluding Sundays)
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()

    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      // Skip Sundays (0) and past dates
      if (date.getDay() !== 0) {
        dates.push(date)
      }
    }

    return dates
  }

  const availableDates = getAvailableDates()

  const isDateAvailable = (date: Date) => {
    return availableDates.some((availableDate) => availableDate.toDateString() === date.toDateString())
  }

  const isDateDisabled = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Disable past dates, Sundays, and dates beyond 2 weeks
    return date < today || date.getDay() === 0 || date > new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000)
  }

  const getSelectedTimeSlotDetails = () => {
    return timeSlots.find((slot) => slot.id === selectedTimeSlot)
  }

  useEffect(() => {
    if (selectedDate && selectedTimeSlot) {
      const timeSlotDetails = getSelectedTimeSlotDetails()
      onScheduleChange({
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        deliveryFee: timeSlotDetails?.price || 50,
      })
    }
  }, [selectedDate, selectedTimeSlot, onScheduleChange])

  const handleDateSelect = (date: Date | undefined) => {
    if (date && isDateAvailable(date)) {
      setSelectedDate(date)
    }
  }

  const handleTimeSlotChange = (timeSlotId: string) => {
    setSelectedTimeSlot(timeSlotId)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-ZA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-5 w-5" />
          Delivery Scheduling
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Date Selection */}
        <div>
          <Label className="text-base font-medium mb-3 block">
            <CalendarIcon className="h-4 w-4 inline mr-2" />
            Select Delivery Date
          </Label>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            disabled={isDateDisabled}
            className="rounded-md border"
            modifiers={{
              available: availableDates,
            }}
            modifiersStyles={{
              available: {
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
              },
            }}
          />
          <Alert className="mt-3">
            <AlertDescription>We deliver Monday to Saturday. Sunday deliveries are not available.</AlertDescription>
          </Alert>
        </div>

        {/* Time Slot Selection */}
        {selectedDate && (
          <div>
            <Label className="text-base font-medium mb-3 block">
              <Clock className="h-4 w-4 inline mr-2" />
              Select Time Slot for {formatDate(selectedDate)}
            </Label>
            <RadioGroup value={selectedTimeSlot} onValueChange={handleTimeSlotChange}>
              <div className="space-y-3">
                {timeSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className={`flex items-center space-x-3 p-4 border rounded-lg ${
                      selectedTimeSlot === slot.id ? "border-primary bg-primary/5" : "border-border"
                    } ${!slot.available ? "opacity-50" : ""}`}
                  >
                    <RadioGroupItem value={slot.id} id={slot.id} disabled={!slot.available} />
                    <Label htmlFor={slot.id} className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{slot.label}</div>
                          <div className="text-sm text-muted-foreground">{slot.time}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">R{slot.price}</div>
                          {slot.id === "express" && (
                            <Badge variant="secondary" className="text-xs">
                              Same Day
                            </Badge>
                          )}
                          {!slot.available && (
                            <Badge variant="destructive" className="text-xs">
                              Unavailable
                            </Badge>
                          )}
                        </div>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        )}

        {/* Selected Schedule Summary */}
        {selectedDate && selectedTimeSlot && (
          <Alert>
            <Truck className="h-4 w-4" />
            <AlertDescription>
              <strong>Scheduled Delivery:</strong>
              <br />
              {formatDate(selectedDate)} between {getSelectedTimeSlotDetails()?.time}
              <br />
              <strong>Delivery Fee:</strong> R{getSelectedTimeSlotDetails()?.price}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}
