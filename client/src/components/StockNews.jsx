function StockNews() {

  const news = [
    {
      title: "Reliance shares surge after strong quarterly earnings",
      source: "Reuters",
      link: "https://www.reuters.com/markets/companies/RELI.NS",
    },

    {
      title: "Infosys expands AI partnerships globally",
      source: "Infosys",
      link: "https://www.infosys.com/newsroom/",
    },

    {
      title: "TCS stock remains stable amid market volatility",
      source: "Moneycontrol",
      link: "https://www.moneycontrol.com/india/stockpricequote/computers-software/tataconsultancyservices/TCS",
    },

    {
      title: "Indian stock market closes higher this week",
      source: "CNBC",
      link: "https://www.cnbc.com/world/?region=world",
    },
  ]

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-10">

      <h2 className="text-white text-2xl font-bold mb-6">
        Market News
      </h2>

      <div className="space-y-5">

        {news.map((item, index) => (

          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="block bg-zinc-800 p-5 rounded-xl hover:border hover:border-green-400 transition"
          >

            <h3 className="text-white text-lg font-semibold">
              {item.title}
            </h3>

            <p className="text-zinc-400 mt-2">
              {item.source}
            </p>

          </a>

        ))}

      </div>

    </div>
  )
}

export default StockNews