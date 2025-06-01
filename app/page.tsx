import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to My Personal Site</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of my learning roadmaps, projects, and ideas in programming, AI, and computer vision.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              PWA Development
              <Badge variant="secondary">In Progress</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Creating backend with C++, converting data to JSON with Python, and using JavaScript for display.</p>
            <p className="text-sm text-muted-foreground">Hosting on Netlify</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              iOS Native Apps
              <Badge variant="outline">Research</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Exploring AltStore for sideloading apps without Apple Developer account.</p>
            <p className="text-sm text-muted-foreground">Using Qt for cross-platform development</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Simulation Engine
              <Badge variant="secondary">Active</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Building with C++ using SFML (OpenGL context)</p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Exploring unions in C++</li>
              <li>• Compile only changed files optimization</li>
              <li>• CLI tool for thought management</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Game Ideas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-3">
              <div>
                <h4 className="font-medium">Orbital</h4>
                <p className="text-sm text-muted-foreground">
                  Control a dot orbiting anchor points. Navigate through gravity fields to reach goals.
                </p>
              </div>
              <div>
                <h4 className="font-medium">ASCII Game Engine</h4>
                <p className="text-sm text-muted-foreground">Terminal-based game engine for retro-style games.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Learning & Development</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Technical Skills</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Neural Networks (digit recognition → advanced drawings)</li>
                <li>• CPU and GPU design from logic gates</li>
                <li>• Networking (TCP, socket programming)</li>
                <li>• CTFs and ethical hacking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Project Ideas</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• UML diagram generator using simulation engine</li>
                <li>• Stellarium-like astronomy app</li>
                <li>• File archive system with auto-git upload</li>
                <li>• Spinning ASCII cube visualization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Backend & Database</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>Exploring Supabase for free backend with PostgreSQL</p>
          <p className="text-sm text-muted-foreground">
            Alternative to managing infrastructure, with built-in authentication and real-time features.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
