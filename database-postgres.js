import { randomUUID } from "node:crypto"
import { sql } from './db.js'

export class DatabasePostgres {
    async list(search) {
        if (search) {
            const query = `%${search}%`
            return await sql`select * from videos where title ilike ${query}`
        }

        return await sql`select * from videos`
    }

    async create(video) {
        const videoId = randomUUID()
        const { title, description, duration } = video

        await sql`insert into videos (id, title, description, duration) values (${videoId}, ${title}, ${description}, ${duration})`

        return {
            id: videoId,
            title,
            description,
            duration,
        }
    }

    async update(id, video) {
        const { title, description, duration } = video

        await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} where id = ${id}`
    }

    async delete(id) {
        await sql`delete from videos where id = ${id}`
    }
} 
