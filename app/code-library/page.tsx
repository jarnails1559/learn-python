'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Copy, Check } from 'lucide-react'
import CodeBlock from '@/components/CodeBlock'

const codeSnippets = [
  {
    title: 'Add Two Numbers',
    description: 'A simple program to add two numbers',
    code: `# Program to add two numbers
num1 = 5
num2 = 10
sum = num1 + num2
print(f"The sum of {num1} and {num2} is {sum}")`,
    tags: ['basic', 'arithmetic']
  },
  {
    title: 'Calculate Factorial',
    description: 'Calculate the factorial of a number',
    code: `# Program to calculate factorial
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)

number = 5
result = factorial(number)
print(f"The factorial of {number} is {result}")`,
    tags: ['function', 'recursion']
  },
  {
    title: 'Check Prime Number',
    description: 'Check if a number is prime',
    code: `# Program to check if a number is prime
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

number = 17
if is_prime(number):
    print(f"{number} is prime")
else:
    print(f"{number} is not prime")`,
    tags: ['function', 'math']
  },
  // Add more code snippets here
]

export default function CodeLibraryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const filteredSnippets = codeSnippets.filter(snippet =>
    snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    snippet.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const copyToClipboard = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl">Code Snippet Library</h1>
      <p className="text-lg sm:text-xl">Explore and use these Python code snippets to enhance your learning!</p>

      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <Search className="w-5 h-5 text-muted-foreground hidden sm:block" />
        <Input
          type="text"
          placeholder="Search snippets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:max-w-sm"
        />
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredSnippets.map((snippet, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">{snippet.title}</CardTitle>
              <CardDescription className="text-sm sm:text-base">{snippet.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="max-h-60 overflow-y-auto">
                <CodeBlock code={snippet.code} language="python" />
              </div>
              <div className="mt-4 flex flex-wrap justify-between items-center">
                <div className="flex flex-wrap gap-2 mb-2 sm:mb-0">
                  {snippet.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(snippet.code, index)}
                  className="w-full sm:w-auto mt-2 sm:mt-0"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" /> Copy
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}