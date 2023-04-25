import "./scss/styles.scss";

export default function Home() {
  return (
    <main>
      <section className="menu__container">
        <header>
          <h1>Welcome to my website</h1>
          <h3>This is a work in progress</h3>
        </header>
        <div className="menu__wrapper">
          <div className="menu__item menu__item1"><h1>THIS IS WORK</h1></div>
          <div className="menu__item menu__item2"><h1>THIS IS CV</h1></div>
          <div className="menu__item menu__item3"><h1>THIS IS GALLERY</h1></div>
          <div className="menu__item menu__item4"><h1>THIS IS ELSE</h1></div>
        </div>
      </section>
    </main>
  )
}
