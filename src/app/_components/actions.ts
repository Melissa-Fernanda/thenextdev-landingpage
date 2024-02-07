'use server'
import { sql } from '@vercel/postgres';

export async function saveLead({email}: {email: string}) {
    try {
        await sql`INSERT INTO PreEnrollment (email) VALUES ( ${email})`;
      } catch (error) {
        console.log(error);
      }
    
}