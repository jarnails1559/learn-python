import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Code, BookOpen, Zap, Library } from 'lucide-react'
import CodePlayground from '@/components/CodePlayground'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl mb-4">Master Python Programming</h1>
        <p className="text-lg lg:text-xl text-muted-foreground mb-8">From beginner to advanced, learn Python with our comprehensive, interactive course.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg">
            <Link href="/variables">Start Learning</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#course-topics">Explore Topics</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Python Playground</h2>
        <CodePlayground />
      </section>

      <section>
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Why Learn Python?</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CheckCircle className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Easy to Learn</CardTitle>
            </CardHeader>
            <CardContent>
              Python&apos;s simple syntax and readability make it an excellent first language for beginners.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Code className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Versatile</CardTitle>
            </CardHeader>
            <CardContent>
              Used in web development, data science, AI, and more, Python is a jack-of-all-trades.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BookOpen className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Large Community</CardTitle>
            </CardHeader>
            <CardContent>
              Benefit from extensive libraries, frameworks, and a supportive community of developers.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>High Demand</CardTitle>
            </CardHeader>
            <CardContent>
              Python developers are in high demand, with excellent job prospects and competitive salaries.
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="course-topics">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Course Topics</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>
                <Link href="/variables" className="hover:underline">Variables</Link>
              </CardTitle>
              <CardDescription>Learn about data storage and manipulation in Python.</CardDescription>
            </CardHeader>
            <CardContent>
              Understand how to declare variables, assign values, and work with different data types in Python.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Link href="/operators" className="hover:underline">Operators</Link>
              </CardTitle>
              <CardDescription>Explore various operators for performing operations on data.</CardDescription>
            </CardHeader>
            <CardContent>
              Master arithmetic, comparison, logical, and other types of operators in Python.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Link href="/keywords" className="hover:underline">Keywords</Link>
              </CardTitle>
              <CardDescription>Understand the reserved words in Python and their purposes.</CardDescription>
            </CardHeader>
            <CardContent>
              Learn about Python&apos;s built-in keywords and how they shape the language&apos;s syntax and functionality.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <Link href="/control-statements" className="hover:underline">Control Statements</Link>
              </CardTitle>
              <CardDescription>Master the art of controlling program flow.</CardDescription>
            </CardHeader>
            <CardContent>
              Dive into conditional statements, loops, and other control structures in Python.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted p-6 lg:p-8 rounded-lg">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Start Your Python Journey?</h2>
        <p className="text-lg lg:text-xl mb-6">Begin with Variables or choose any topic from the navigation menu above.</p>
        <Button asChild size="lg">
          <Link href="/variables">Start with Variables</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Code className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Interactive Playground</CardTitle>
            </CardHeader>
            <CardContent>
              Practice Python code in real-time with our interactive playground.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Library className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Code Snippet Library</CardTitle>
            </CardHeader>
            <CardContent>
              Explore a vast collection of Python code snippets for quick learning and reference.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BookOpen className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Comprehensive Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              Learn Python concepts with our detailed, easy-to-follow tutorials.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}