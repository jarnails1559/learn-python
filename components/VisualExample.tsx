import React from 'react'
import dynamic from 'next/dynamic'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const DynamicMermaidDiagram = dynamic(() => import('./MermaidDiagram'), { ssr: false })

interface VisualExampleProps {
  title: string
  description: string
  visual: string
}

export default function VisualExample({ title, description, visual }: VisualExampleProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <DynamicMermaidDiagram chart={visual} />
      </CardContent>
    </Card>
  )
}