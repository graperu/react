import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Quản Lý Nhân Sự",
      dateStart: "10th October 2024",
      dateEnd: "1st December 2024",
      desc: "Hệ thống quản lý nhân sự toàn diện tích hợp chấm công, tính lương và đánh giá hiệu suất. Sử dụng React.js, Node.js, Express và MySQL. Có phân quyền theo vai trò (Admin, HR, Staff) và xuất báo cáo PDF/Excel.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/PhanDinh2005"
    },
    {
      id: 2,
      title: "Website Đặt Xe Dịch Vụ",
      dateStart: "15th January 2025",
      dateEnd: "20th March 2025",
      desc: "Nền tảng cho thuê và đặt xe dịch vụ trực tuyến. Cung cấp bản đồ hiển thị vị trí các trạm xe, tính toán giá cước tự động bằng Google Maps API và hỗ trợ thanh toán online thông qua VNPay/Momo. Công nghệ: React, TailwindCSS, Firebase.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/PhanDinh2005"
    },
    {
      id: 3,
      title: "Ứng dụng Ghi Chú Học Tập",
      dateStart: "5th April 2025",
      dateEnd: "30th May 2025",
      desc: "Ứng dụng hỗ trợ sinh viên ghi chú môn học theo phương pháp Cornell. Tích hợp Flashcard học từ vựng và tự động thông báo ôn tập theo Spaced Repetition (Lặp lại ngắt quãng). Công nghệ: React Native, SQLite.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      github: "https://github.com/PhanDinh2005"
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="projects__container">
        <header className="projects__header">
          <h2 className="section-title text-gradient">Dự án tiêu biểu</h2>
          <p className="projects__desc">
            Dòng thời gian các dự án tiêu biểu tôi đã phát triển, phản ánh hành trình xây dựng những ứng dụng và website thực tế.
          </p>
        </header>

        <div className="projects__timeline">
          <div className="projects__progress"></div>
          
          {projectsData.map((project, idx) => (
            <article className="projects__item" key={project.id}>
              <div className="projects__item-left">
                <time className="projects__date">
                  <span className="projects__date-start">{project.dateStart}</span>
                  <i className="fa-solid fa-arrow-down-long projects__date-sep"></i>
                  <span className="projects__date-end">{project.dateEnd}</span>
                </time>
              </div>
              <div className="projects__item-center">
                <div className="projects__item-circle"></div>
              </div>
              <div className="projects__item-right">
                <div className="projects__content">
                  <h3 className="projects__name">
                    {project.title}
                    <a className="projects__github-icon" href={project.github} target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </h3>
                  <p className="projects__description">{project.desc}</p>
                </div>
                <figure className="projects__image-wrapper">
                  <img src={project.image} alt={project.title} />
                </figure>
              </div>
            </article>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
