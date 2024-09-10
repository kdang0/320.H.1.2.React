import "./App.css";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Article } from "./components/Article.jsx";
import blog1 from "./assets/blog-image-1.jpg";
import blog2 from "./assets/blog-image-2.jpg";

const article1 = {
  date: "11/12/20",
  title: "On the Street in Brooklyn",
  img: {
    src: blog1,
    name: "blog1",
  },
  content:
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Eros parturient lacinia euismod porttitor fringilla felis parturient. Ad luctus euismod praesent nec efficitur. Class magna nisl tempus odio; eu netus felis congue. Adipiscing ut sit sociosqu ex nisl ornare sapien. Ac molestie mauris dignissim tempus vulputate viverra nullam. Sem elementum fringilla phasellus mus rutrum turpis. Senectus aenean dictum amet a mi dapibus. Vel nisi enim nullam faucibus blandit eu ut dignissim. Sem neque pulvinar nisi dui velit. Volutpat sociosqu blandit posuere nec rhoncus velit, nam rhoncus turpis. Orci dapibus ligula dignissim rutrum duis quis phasellus platea erat. Semper turpis hac eleifend dignissim fames nam natoque. Rutrum sem ridiculus lectus, volutpat hendrerit rhoncus id. Faucibus porta est etiam nam aliquam. Sed ultricies nullam urna pulvinar molestie. Cursus dis habitasse semper viverra dignissim etiam litora.",
};

const article2 = {
  date: "11/11/20",
  title: "Vintage in Vogue",
  img: {
    src: blog2,
    name: "blog2",
  },
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

function App() {
  return (
    <div>
      <Header />
      <main>
        <Article
          title={article1.title}
          date={article1.date}
          img={article1.img}
          content={article1.content}
        />
        <Article
          title={article2.title}
          date={article2.date}
          img={article2.img}
          content={article2.content}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
