
export const Testimonials = () => {
  const newsData = [
    {
      title: 'Artificial Intelligence Day',
      description:
        'Notice to all teachers and students: You are invited to attend the day organized by the ATIA ISSATSO Club on Wednesday, April 24th, starting at 8:30 AM in the LAATIRI Amphitheater.',
      img: 'img/iaNews.jpg',
    },
    {
      title: 'Displaying the results of the SU1  2023-2024',
      description:
        'The main session results for third-year Bachelors degree students and second-year Masters degree students will be uploaded on the institute platform. Our researchers have made a significant breakthrough in renewable energy technology, paving the way for a greener future.',
      img: 'img/alert.jpg',
    },

    {
      title: 'Open Day for health',
      description:
        'The University of Sousse is organizing an open day on March 9, 2024, titled "Health for All." Free consultations and awareness sessions led by eminent professors in medicine and health specialists, in collaboration with highly qualified medical staff, as well as young students and teachers, will be held. Students, teachers, administrative staff, and workers are invited to attend.',
      img: 'img/health.jpeg',
    },
    {
      title: 'Elimination SU2 2024',
      description:
        'It is reminded to all students of the institution that the second semester has already started since January 15, 2024 .Furthermore, it is reminded that collective absences are counted as INDIVIDUAL ABSENCES PER STUDENT.',
      img: 'img/alert.jpg',
    },
  ]

  return (
    <div id="news"  >
      <style>
        {`
          .grid-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .card {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: row;
          }

          .card-body {
            padding: 20px;
            

          }

          .card-title {
            font-weight: bold;
            margin-bottom: 10px;
          }

          .card-text {
            color: #555;
          }

          .card-img {
            width: 150px;
            height: 150px;
            border-radius: 2px;
            object-fit: cover;
          }
        `}
      </style>
      <div className="container">
        <div className="section-title text-center">
          <h2>Recent News</h2>
        </div>
        <div className="grid-container">
          <h4 className="card-title">{newsData[0].title}</h4>
          <div className="card shadow">
            <img className="card-img" src={newsData[0].img} alt="" />
            <div className="card-body">
              <p className="card-text">{newsData[0].description}</p>
            </div>
          </div>
          {newsData.slice(1).map((news, index) => (
            <div key={`news-${index}`} className="card shadow">
              <img className="card-img" src={news.img} alt="" />
              <div className="card-body">
                <h4 className="card-title">{news.title}</h4>
                <p className="card-text">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
