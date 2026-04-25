import page from "page"
import {Home, Rent, Materials, About, Contacts} from "../pages"
import { NotFound } from "../components/NotFound/NotFound"

export const InitRouter = (renderApp) => {
  page.base("/spec-tranc-site");
  page("/",(ctx) => renderApp(Home, ctx.pathname))
  page("/rent",(ctx) => renderApp(Rent, ctx.pathname))
  page("/materials",(ctx) => renderApp(Materials, ctx.pathname))
  page("/about",(ctx) => renderApp(About, ctx.pathname))
  page("/contacts",(ctx) => renderApp(Contacts, ctx.pathname))
  page("*", (ctx) => renderApp(NotFound, ctx.pathname))

  page()
}