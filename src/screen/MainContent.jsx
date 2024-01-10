import React from "react";
import { Link } from "react-router-dom";
const mainContent = () => {
    return (
        <div>
            <section id="">
                <main>
                    <div className="first-screen">
                        <div className="say-hi">
                            <div>
                                <h1>Hello, I'm Verak </h1>
                                <h3>Software Engineer</h3>
                                <label><Link to="/github"    ><img src="image/github.png" alt="" /></Link></label>
                                <label><Link to="/linkedin"><img src="image/linkedin.png" alt="" /></Link></label>
                                <label><Link to="/facebook"><img src="image/facebook.png" alt="" /></Link></label>
                            </div>
                        </div>
                        <div className="profile">
                            <div>
                                <img src="image/profile.jpg" alt="" class="vert-move" />
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            <section id="skill" >
                <main>
                    <div className="my-skill"  >
                        <div className="skill-title">
                            <h1>My Skills</h1>
                        </div>
                        <div className="the-skill">
                            <div className="all-skill">
                                <div className="title-logo">
                                    <div className="d-flex">
                                        <img src="image/c-.png" width={25} alt="" />
                                        <h1 className="mx-2">C/C++</h1>
                                    </div>
                                    <div className="level-skill">
                                        <div className="line" />
                                        <p>80%</p>
                                    </div>

                                    <div className="d-flex">
                                        <img src="image/java.png" width={25} alt="" />
                                        <h1 className="mx-2">Java Programming</h1>
                                    </div>
                                    <div className="level-skill">
                                        <div className="line" />
                                        <p>90%</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src="image/spring-logo.png" width={25} alt="" />
                                        <h1 className="mx-2">Java Spring Boot</h1>
                                    </div>
                                    <div className="level-skill">
                                        <div className="line" />
                                        <p>75%</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src="image/flutter.png" width={25} alt="" />
                                        <h1 className="mx-2">Dart & Flutter</h1>
                                    </div>
                                    <div className="level-skill">
                                        <div className="line" />
                                        <p>70%</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src="image/html-5.png" width={25} alt="" />
                                        <h1 className="mx-2">HTML 5</h1>
                                    </div>
                                    <div className="level-skill">
                                        <div className="line" />
                                        <p>80%</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src="image/css-3.png" width={25} alt="" />
                                        <h1 className="mx-2">CSS & Bootstrap</h1>
                                    </div>
                                    <div className="level-skill">
                                        <div className="line" />
                                        <p>75%</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src="image/java-script.png" width={25} alt="" />
                                        <h1 className="mx-2">JavaScript</h1>
                                    </div>
                                    <div className="level-skill">
                                        <div className="line" />
                                        <p>70%</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src="logo192.png" width={25} alt="" />
                                        <h1 className="mx-2">ReactJs</h1>
                                    </div>
                                    <div className="level-skill">
                                        <div className="line" />
                                        <p>65%</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src="image/jquery.png" width={25} alt="" />
                                        <h1 className="mx-2">JQuery</h1>
                                    </div>
                                    <div className="level-skill">
                                        <div className="line" />
                                        <p>50%</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src="image/php.png" width={25} alt="" />
                                        <h1 className="mx-2">PHP</h1>
                                    </div>
                                    <div className="level-skill">
                                        <div className="line" />
                                        <p>90%</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src="image/laravel.png" width={25} alt="" />
                                        <h1 className="mx-2">Laravel</h1>
                                    </div>
                                    <div className="level-skill">
                                        <div className="line" />
                                        <p>80%</p>
                                    </div>
                                    <div className="d-flex">
                                        <img src="image/mysql.png" width={25} alt="" />
                                        <h1 className="mx-2">MySQL</h1>
                                    </div>
                                    <div className="level-skill">
                                        <div className="line" />
                                        <p>50%</p>
                                    </div>

                                </div>
                            </div>
                            <div className="logo-skill">

                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}
export default mainContent;
