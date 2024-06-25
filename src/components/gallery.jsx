
export const Gallery = () => {

  const newsData = [
    {
      title: 'Enterprise / Student Forum ISSATSo FEE2K23',
      description:
        '4C and ISSATSO in collaboration with their socio-economic partners (companies, organizations, associations, and support structures), are organizing the Enterprise/Student Forum FEE2K23 on Wednesday, December 13, 2023. Your presence honors us, and it will certainly enrich our event.',
    },
    {
      title: 'Focus Day',
      description:
        'The 4C Center at ISSAT Sousse is organizing, in partnership with FOCUS company, a morning session on Wednesday, May 3, 2023, starting at 10:00 AM. This session will include presentations about the company, the apprenticeship program, available positions, and opportunities. There will also be a technical recruitment test. The invitation is open to all interested students and teachers.',
    },
    {
      title: 'Startup and Entrepreneurship Day',
      description:
        'The Career and Skills Certification Center at the Higher Institute of Applied Sciences and Technology of Sousse, in collaboration with its partners, is organizing its Startup and Entrepreneurship Day for the year 2022 (JSE 2K22) on Wednesday, November 30, 2022.',
    },
   
  ]
  return (
    <div id="events" className="section">
      <style>
        {`
          .card {
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .card-body-event {
            padding: 20px;
            min-Width:150px;
            min-height:300px;
          }
          .card-title {
            font-weight: bold;
            margin-bottom: 10px;
          }
          .card-text {
            color: #555;
          }
        `}
      </style>
      <div className="container">
        <div className="section-title text-center">
          <h2>Events</h2>
        </div>
        <div className="row">
          {newsData.map((news, index) => (
            <div key={`news-${index}`} className="col-md-4">
              <div className="card shadow">
                <img className="card-img-top" src={news.img} alt="" />
                <div className="card-body-event">
                  <h4 className="card-title">{news.title}</h4>
                  <p className="card-text">{news.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
