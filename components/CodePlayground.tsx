'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import axios from 'axios'

export default function CodePlayground() {
  const [code, setCode] = useState('')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasInput, setHasInput] = useState(false)

  useEffect(() => {
    // Check if the code contains any input() function calls
    setHasInput(code.includes('input('))
  }, [code])

  const runCode = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post('https://python-compiler.jarnails1559.workers.dev/', {
        code,
        stdin: input
      });
      
      setOutput(`Output:\n${response.data.output}\n\nExit Code: ${response.data.exitCode}`);
    } catch (error) {
      console.error('Error running code:', error);
      setOutput(`Error running code: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Python Playground</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your Python code here..."
          className="min-h-[200px] font-mono text-sm lg:text-base"
        />
        {hasInput && (
          <Input
            type="text"
            placeholder="Enter input here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="mt-2"
          />
        )}
        <Button onClick={runCode} className="mt-4 w-full sm:w-auto" disabled={isLoading}>
          {isLoading ? 'Running...' : 'Run Code'}
        </Button>
        {output && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Output:</h3>
            <pre className="bg-muted p-2 rounded-md whitespace-pre-wrap text-sm lg:text-base">{output}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  )
}