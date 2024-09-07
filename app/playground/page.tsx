import CodePlayground from '@/components/CodePlayground'

export default function PlaygroundPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Python Playground</h1>
      <p className="text-xl">Experiment with Python code and see the results in real-time.</p>
      <CodePlayground />
    </div>
  )
}