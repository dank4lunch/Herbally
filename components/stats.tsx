export function Stats() {
  const stats = [
    { number: "10+", label: "Years Growing" },
    { number: "50+", label: "Premium Strains" },
    { number: "100%", label: "Organic Cultivation" },
    { number: "500+", label: "Retail Partners" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Growing Excellence</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A decade of dedication to cultivating the finest cannabis with sustainable practices and unwavering quality.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
