import {AppSidebar} from "@/components/custom/AppSidebar";
import {Navbar} from "@/components/ui/navbar";
import {TopNav} from "@/components/custom/Navbar";
import {TodoList} from "@/components/todo/TodoList";

export default function Home() {
  return (
      <div className="flex flex-1 flex-col gap-4 p-8 pt-0">
          <TopNav/>
          <AppSidebar/>
          <div className="flex flex-1 flex-col items-start gap-4 p-8 pt-0">
              <div className="w-full">
                  <TodoList />
              </div>
          </div>
      </div>
  )
}
