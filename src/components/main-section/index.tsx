export const MainSection = () => {
  return (
    <section className="container md:px-2 mx-auto w-full md:h-auto py-2 md:py-12 flex flex-col gap-10">
      <div className="w-full h-auto md:h-1/2 py-1 md:py-4 md:flex md:gap-10">
        <div className="w-full md:w-1/2 h-60 md:h-auto mb-2 md:mb-0 bg-[url('./assets/lake.jpg')] bg-cover bg-center">
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col px-3 md:px-0">
          <h2 className="text-3xl md:text-4xl mb-2 md:mb-6">Explore the amazing nature of Switzerland</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla suscipit asperiores modi quidem sit, aliquid illum, reprehenderit amet porro, nobis cumque tempore quisquam quos commodi maxime eum odio iste neque at provident libero? Eum quaerat culpa cupiditate at distinctio, recusandae quas delectus voluptatem accusamus eius odit nihil cum voluptatum corrupti. Laborum sint, corporis sit rem possimus repellendus earum placeat ad vero dolorum voluptas delectus, vitae obcaecati, minus neque nobis aperiam qui consectetur debitis voluptate id. Soluta temporibus voluptates possimus exercitationem iste, enim perferendis deserunt. Fugit enim laboriosam vitae, quaerat, voluptas voluptate corrupti laborum cumque culpa dolor soluta debitis tempore minus.</p>
        </div>
      </div>
      <div className="w-full md:h-1/2 py-1 md:py-4 flex flex-col md:flex-row md:gap-10">
        <div className="w-full md:w-1/2 h-full flex flex-col order-2 md:order-1 px-3 md:px-0">
          <h2 className="text-3xl md:text-4xl mb-2 md:mb-6">Enjoy the silence</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente laboriosam facilis saepe ratione fuga, nulla ducimus hic eos totam animi quos, sequi doloribus, accusantium nisi voluptatem esse suscipit harum. Reiciendis expedita odio eligendi adipisci libero quo nisi perferendis consectetur, suscipit nulla, corporis natus, totam praesentium possimus amet itaque sunt odit soluta facilis laborum ullam delectus atque? At quisquam magni nihil vero veniam incidunt corporis quidem ullam et, provident assumenda aliquid ab placeat quaerat facilis consectetur tenetur consequuntur dolorum. A doloremque aut blanditiis dolores quae, molestiae sapiente alias voluptates dolore maiores asperiores officiis itaque numquam quam vitae consectetur possimus. Reiciendis.</p>
        </div>
        <div className="w-full md:w-1/2 h-60 md:h-auto mb-2 md:mb-0  bg-[url('./assets/mountains.jpg')] bg-cover bg-center order-1 md:order-2">
        </div>
      </div>
      <div className="w-full h-auto md:h-1/2 py-1 md:py-4 md:flex md:gap-10">
        <div className="w-full md:w-1/2 h-60 md:h-auto mb-2 md:mb-0 bg-[url('./assets/camping-gear.jpg')] bg-cover bg-center">
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col px-3 md:px-0">
          <h2 className="text-3xl md:text-4xl mb-2 md:mb-6">About our team</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla suscipit asperiores modi quidem sit, aliquid illum, reprehenderit amet porro, nobis cumque tempore quisquam quos commodi maxime eum odio iste neque at provident libero? Eum quaerat culpa cupiditate at distinctio, recusandae quas delectus voluptatem accusamus eius odit nihil cum voluptatum corrupti. Laborum sint, corporis sit rem possimus repellendus earum placeat ad vero dolorum voluptas delectus, vitae obcaecati, minus neque nobis aperiam qui consectetur debitis voluptate id. Soluta temporibus voluptates possimus exercitationem iste, enim perferendis deserunt. Fugit enim laboriosam vitae, quaerat, voluptas voluptate corrupti laborum cumque culpa dolor soluta debitis tempore minus.</p>
        </div>
      </div>
    </section>
  )
}
