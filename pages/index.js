import Head from "next/head";

export default function Home() {
  const categories = [
    `Women's Running Shoes`,
    `Everday Sneakers`,
    `Slip-Ons`,
    `High Tops`,
    `Boat Shoes`,
    `Flats`,
    `Weather Repellent Shoes`,
  ];

  const products = [
    {
      name: "Women's Wool Runner Mizzles",
      description:
        "Our weather-ready sneaker made with merino wool and Puddle Guard™.",
      styles: [
        {
          name: "Natural Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/2",
        },
        {
          name: "Savanna Night (Cream Sole)",
          price: "$115",
          colors: ["#353946", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6zdZ6PC1jhCrgl1lilg7N8/2",
        },
        {
          name: "Black Sands (Asphalt Sole)",
          price: "$115",
          colors: ["#28282c", "#434345"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_265,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/OrbgtJiuAc7M1yL4KvQjw/1",
        },
        {
          name: "Cardamom (Cream Sole)",
          price: "$115",
          colors: ["#9d957a", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_265,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/OrbgtJiuAc7M1yL4KvQjw/1",
        },
        {
          name: "Ginseng (Beige Sole)",
          price: "$115",
          colors: ["#e7e5e2", "#bfbab5"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_265,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/OrbgtJiuAc7M1yL4KvQjw/1",
        },
        {
          name: "Dapple Gray (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_265,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/OrbgtJiuAc7M1yL4KvQjw/1",
        },
        {
          name: "Aurora (Cream)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_265,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/OrbgtJiuAc7M1yL4KvQjw/1",
        },
        {
          name: "Pacific (Cream Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_265,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/OrbgtJiuAc7M1yL4KvQjw/1",
        },
        {
          name: "True Black (Black Sole)",
          price: "$115",
          colors: ["#585c60", "#e2e2da"],
          image:
            "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_265,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/OrbgtJiuAc7M1yL4KvQjw/1",
        },
      ],
    },
  ];
  return (
    <div className="font-poppins">
      <Head>
        <title>Rebuilding Allbirds</title>
      </Head>
      <div className="px-4 py-3 bg-gray-500 text-white">
        <p className="text-xs font-semibold text-center">
          Gift with confidence. Returns are extended till Junuary 15th.
        </p>
      </div>
      <header className="sticky top-0 z-10 px-5 py-3 flex items-center justify-between bg-white">
        <div className="absolute inset-0 shadow-lg opacity-50"></div>
        <div className="flex">
          <button
            className="h-8 w-8
          "
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="flex">
          <img
            className="h-9"
            src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
            alt="allbirds"
          />
        </div>
        <div className="flex">
          <button className="h-8 w-8">
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </header>
      <main>
        <div>
          <div className="flex items-center justify-between px-8 pt-4 pb-3">
            <div className="">
              <div className="text-xs font-semibold text-gray-900 space-x-1">
                <a href="#" className="underline">
                  Home
                </a>
                <span>/</span>
              </div>
              <div className="text-lg font-bold text-gray-900">
                Women's Shoes
              </div>
            </div>
            <div className="flex">
              <button className="h-8 w-8">
                <svg
                  className="transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="bg-gray-100 py-2 overflow-x-auto scrollbars-hidden">
            <div className="px-8 text-sm inline-flex space-x-5">
              {categories.map((category) => (
                <a href="#" className="font-medium text-gray-800 whitespace-nowrap">
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="py-6 px-8">
            {products.map((product) => (
              <div>
                <div>
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-sm font-medium text-gray-800">{product.description}</p>
                </div>
                <div className="mt-4 shadow-lg">
                  <div className="shadow-lg">
                    <a href="#">
                      <div className="bg-gray-100">
                        <img src={product.styles[0].image} alt="" />
                      </div>
                      <div className="px-4 pt-3">
                        <h3 className="text-sm font-bold">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-gray-800">
                          {product.styles[0].name}
                        </p>
                      </div>
                    </a>

                    <div className="mt-1 px-4 pb-4">
                      <p className="text-sm font-medium text-gray-800">
                        {product.styles[0].price}
                      </p>
                      <div className="mt-4 flex space-x-4">
                        {product.styles.slice(0, 6).map((style, i) => (
                          <button
                            className={`h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden transform -rotate-45 ${
                              i === 0
                                ? "ring-2 ring-offset-1 ring-gray-300"
                                : ""
                            }`}
                          >
                            <span className="sr-only">{style.name}</span>
                            <span
                              className="h-3 w-6"
                              style={{ backgroundColor: style.colors[0] }}
                            ></span>
                            <span
                              className="h-3 w-6"
                              style={{ backgroundColor: style.colors[1] }}
                            ></span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="border-t">
                      <button className="text-sm px-4 py-2 flex w-full justify-between">
                        <span className="font-bold">Quick Add</span>
                        <span>
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
