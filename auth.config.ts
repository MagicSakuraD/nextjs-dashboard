import type { NextAuthConfig } from "next-auth";

// 定义一个名为authConfig的常量，类型为NextAuthConfig
export const authConfig: NextAuthConfig = {
  providers: [], // 在此处配置身份验证提供程序（例如Google、Facebook等）
  pages: {
    signIn: "/login", // 指定登录页面的URL路径
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // authorized回调函数在用户进行身份验证后被调用
      const isLoggedIn = !!auth?.user; // 检查用户是否已登录
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard"); // 检查用户是否在仪表板页面
      if (isOnDashboard) {
        if (isLoggedIn) return true; // 如果用户已登录，则允许访问仪表板页面
        return false; // 如果用户未登录，则重定向到登录页面
      } else if (isLoggedIn) {
        // 如果用户已登录但不在仪表板页面，则重定向到仪表板页面
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true; // 允许其他页面的访问
    },
  },
};
