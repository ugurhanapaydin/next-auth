export {default} from  "next-auth/middleware" 


// referance: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {matcher: ["/extra","/dashboard"]}