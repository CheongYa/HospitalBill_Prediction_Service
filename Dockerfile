# 1단계: React 앱 빌드
FROM node:18-alpine AS build

WORKDIR /app

# 패키지 설치
COPY package*.json ./
RUN npm install

# 소스 복사 후 빌드
COPY . .
RUN npm run build

# 2단계: Nginx로 정적 파일 서빙
FROM nginx:1.27-alpine

# Nginx 기본 static 경로에 빌드 결과 복사
COPY --from=build /app/build /usr/share/nginx/html

# (선택) 로그를 표준출력으로
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
 && ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
