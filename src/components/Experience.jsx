import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Học tập tại Đại học GTVT TP.HCM",
      dateStart: "09/2023",
      dateEnd: "Hiện tại",
      desc: "Bắt đầu chương trình đào tạo Cử nhân Công nghệ Thông tin. Tập trung vào kiến trúc phần mềm, cấu trúc dữ liệu và giải thuật."
    },
    {
      title: "Tham gia các khóa học chuyên sâu",
      dateStart: "01/2024",
      dateEnd: "06/2024",
      desc: "Nghiên cứu về ReactJS, NodeJS và các Framework hiện đại. Hoàn thành chứng chỉ thiết kế Web."
    },
    {
      title: "Phát triển dự án cá nhân",
      dateStart: "07/2024",
      dateEnd: "Hiện tại",
      desc: "Áp dụng kiến thức xây dựng các ứng dụng Web thực tế. Học cách triển khai lên các server."
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="experience__container">
        <h2 className="section-title text-gradient">Kinh nghiệm học tập & Làm việc</h2>
        <p className="experience__subtitle">
          Dưới đây là các cột mốc trong quá trình học tập và hành trình theo đuổi ngành IT của tôi.
        </p>

        <div className="projects__timeline">
          <div className="projects__progress"></div>
          
          {experiences.map((exp, idx) => (
            <article className="projects__item" key={idx}>
              <div className="projects__item-left">
                <time className="projects__date">
                  <span className="projects__date-start">{exp.dateStart}</span>
                  <i className="fa-solid fa-arrow-down-long projects__date-sep"></i>
                  <span className="projects__date-end">{exp.dateEnd}</span>
                </time>
              </div>
              <div className="projects__item-center">
                <div className="projects__item-circle"></div>
              </div>
              <div className="projects__item-right">
                <div className="projects__content">
                  <h3 className="projects__name">{exp.title}</h3>
                  <p className="projects__description">{exp.desc}</p>
                </div>
              </div>
            </article>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;
