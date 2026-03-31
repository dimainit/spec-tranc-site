import page from "page"
import {Home, Rent, Materials, About, Contacts} from "../pages"

export const InitRouter = (renderApp) => {
  page("/",(ctx) => renderApp(Home, ctx.pathname))
  page("/rent",(ctx) => renderApp(Rent, ctx.pathname))
  page("/materials",(ctx) => renderApp(Materials, ctx.pathname))
  page("/about",(ctx) => renderApp(About, ctx.pathname))
  page("/contacts",(ctx) => renderApp(Contacts, ctx.pathname))

  page()
}