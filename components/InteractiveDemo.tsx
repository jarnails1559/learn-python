"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import CodeBlock from '@/components/CodeBlock'
import axios from 'axios'

interface InteractiveDemoProps {
  code: string
  language: string
  hasInput?: boolean
}

export default function InteractiveDemo({ code, language, hasInput: initialHasInput = false }: InteractiveDemoProps) {
  const [demoCode, setDemoCode] = useState(code)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasInput, setHasInput] = useState(initialHasInput)

  useEffect(() => {
    // Check if the code contains any input() function calls
    setHasInput(demoCode.includes('input('))
  }, [demoCode])

  const runCode = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post('https://python-compiler.jarnails1559.workers.dev/', {
        code: demoCode,
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
    <div className="space-y-4">
      <Textarea
        value={demoCode}
        onChange={(e) => setDemoCode(e.target.value)}
        rows={10}
        className="font-mono text-sm lg:text-base"
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
      <Button onClick={runCode} className="w-full sm:w-auto" disabled={isLoading}>
        {isLoading ? 'Running...' : 'Run Code'}
      </Button>
      {output && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Result:</h3>
          <CodeBlock code={output} language={language} />
        </div>
      )}
    </div>
  )
}