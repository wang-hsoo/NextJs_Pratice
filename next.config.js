/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects(){
    return [
      {
        source: "/old-blog/:path*", // 만약 유저가 어디론가 이동한다면 , * 뒤에 어떤것이 나오든 그대로 붙게된다
        destination:"/new-blog/:path*",// destination으로 보낸다
        permanent: false, // 브라우저나  검색엔진이 이 정보를 기억하는지 결정
      }
    ];
  },

  async rewrites(){
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      }
    ];
  }
}

module.exports = nextConfig
