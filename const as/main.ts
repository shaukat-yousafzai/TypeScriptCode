const routes = {
    home : "/",
    admin : "/admin"
} as const;

type route = (typeof routes)[keyof typeof routes]

const getRoute = (routes:route)=>{}

getRoute(routes.home)
getRoute('/admin')



