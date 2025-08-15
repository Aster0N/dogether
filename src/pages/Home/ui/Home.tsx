import { routePath } from "@/app/router"
import { useUserStore } from "@/entities/user"
import { useNavigate } from "react-router-dom"
import cl from "./Home.module.scss"
import HomeImg from "/home-img.svg"

const Home = () => {
  const { user, isAuth } = useUserStore()
  const navigate = useNavigate()
  const redirectUser = () => {
    if (user == null && !isAuth) {
      navigate(routePath.AUTH)
    } else {
      navigate(routePath.PROFILE) // * '/projects' in future
    }
  }

  return (
    <>
      <h1 className={cl.header}>DoGether</h1>
      <div className={cl.colsWrapper}>
        <div className={cl.infoWrapper}>
          <div className={cl.contentWrapper}>
            <div className={cl.content}>
              <h5>Unleash Your Team’s Flow!</h5>
              <p>
                From daily chores to ambitious projects, shape your tasks your
                way—together.
              </p>
              <p>
                DoGether empowers you to bring ideas to life with ease. Create
                projects, assign tasks, and collaborate with your team, whether
                it’s your family, friends, or colleagues. Drag, prioritize, and
                customize tasks to match your vision. Track progress in
                real-time, stay organized, and make every step count.
              </p>
            </div>
          </div>
          <div className={cl.buttonWrapper}>
            <button
              className={`${cl.getStartBtn} _btn-large`}
              onClick={() => redirectUser()}
            >
              get started
            </button>
          </div>
        </div>
        <div className={cl.homeImage}>
          <img src={HomeImg} alt="image of team work" />
        </div>
      </div>
    </>
  )
}

export default Home
