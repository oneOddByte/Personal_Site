import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Sword, Zap } from "lucide-react"

const games = [
  {
    title: "Skyrim",
    icon: <Sword className="h-6 w-6" />,
    genre: "RPG",
    description: "Open-world fantasy role-playing game",
    status: "Completed",
  },
  {
    title: "Dark Souls 1",
    icon: <Zap className="h-6 w-6" />,
    genre: "Action RPG",
    description: "Challenging dark fantasy action RPG",
    status: "Playing",
  },
  {
    title: "S.T.A.L.K.E.R.",
    icon: <Gamepad2 className="h-6 w-6" />,
    genre: "FPS/Survival",
    description: "Post-apocalyptic survival shooter",
    status: "Backlog",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "Playing":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "Backlog":
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export default function GamesPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight flex items-center justify-center gap-3">
          <Gamepad2 className="h-10 w-10 text-primary" />
          My Games
        </h1>
        <p className="text-xl text-muted-foreground">
          A collection of games I'm playing, have completed, or plan to play
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer group"
            tabIndex={0}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {game.icon}
                  </div>
                  <span>{game.title}</span>
                </div>
                <Badge className={getStatusColor(game.status)}>{game.status}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">{game.genre}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{game.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Gaming Setup & Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Favorite Genres</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">RPG</Badge>
                <Badge variant="secondary">Action RPG</Badge>
                <Badge variant="secondary">FPS</Badge>
                <Badge variant="secondary">Survival</Badge>
                <Badge variant="secondary">Strategy</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Gaming Goals</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Complete Dark Souls trilogy</li>
                <li>• Explore more indie games</li>
                <li>• Try game development</li>
                <li>• Build gaming-related projects</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
