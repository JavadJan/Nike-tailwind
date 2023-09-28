import { services } from "@constants"
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <section className="grid grid-cols-3 max-container gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {
        services.map((service) => {
          return <ServiceCard key={service.label}
            {...service}
          />
        })
      }

    </section>
  )
}

export default Services