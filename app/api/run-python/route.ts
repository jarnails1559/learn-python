import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(req: Request) {
  const { code } = await req.json()

  try {
    const response = await axios.post('https://python-compiler.jarnails1559.workers.dev/', {
      code,
      stdin: ''
    })
    
    return NextResponse.json({ output: response.data.output })
  } catch (error) {
    console.error('Error executing Python code:', error)
    return NextResponse.json({ output: 'Error executing code' }, { status: 500 })
  }
}