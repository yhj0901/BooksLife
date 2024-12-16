# 빌드 단계 (builder stage)
FROM node:20-alpine AS builder
WORKDIR /app

# 패키지 파일 복사
COPY package.json yarn.lock ./

# 패키지 설치
RUN yarn install

# 소스 파일 복사
COPY . .

# Next.js 프로덕션 빌드
RUN yarn build

# 프로덕션 실행 단계 (runner stage)
FROM node:20-alpine AS runner
WORKDIR /app

# 빌드 결과물 복사
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Next.js 서버는 기본적으로 3000번 포트 사용
EXPOSE 3000

# 프로덕션 런타임 명령
CMD ["yarn", "start", "--hostname", "0.0.0.0"]