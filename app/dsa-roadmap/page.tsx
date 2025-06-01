import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Zap, Target } from "lucide-react"

export default function DSARoadmapPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight flex items-center justify-center gap-3">
          <Database className="h-10 w-10 text-primary" />
          DSA Learning Roadmap
        </h1>
        <p className="text-xl text-muted-foreground">
          A structured path to mastering Data Structures and Algorithms for coding interviews and problem-solving
        </p>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Phase 1: Foundations (1-2 Months)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">Goal</Badge>
            <span className="text-sm">Master basic data structures and algorithm analysis</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Prerequisites</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-0.5 text-xs">
                    Lang
                  </Badge>
                  <span>Python (recommended), Java, C++</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-0.5 text-xs">
                    Math
                  </Badge>
                  <span>Logarithms, series, permutations/combinations</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Algorithm Analysis</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Time and Space Complexity (Big O Notation)</li>
                <li>• Best, Average, Worst Case</li>
                <li>• Analyzing loops, recursion</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Basic Data Structures</h4>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-4">
                <h5 className="font-medium mb-2">Arrays</h5>
                <p className="text-xs text-muted-foreground">Static vs. Dynamic, 1D/2D arrays, operations</p>
              </Card>
              <Card className="p-4">
                <h5 className="font-medium mb-2">Linked Lists</h5>
                <p className="text-xs text-muted-foreground">Singly, Doubly, Circular operations</p>
              </Card>
              <Card className="p-4">
                <h5 className="font-medium mb-2">Stacks</h5>
                <p className="text-xs text-muted-foreground">LIFO, push, pop, applications</p>
              </Card>
              <Card className="p-4">
                <h5 className="font-medium mb-2">Queues</h5>
                <p className="text-xs text-muted-foreground">FIFO, enqueue, dequeue, types</p>
              </Card>
              <Card className="p-4">
                <h5 className="font-medium mb-2">Strings</h5>
                <p className="text-xs text-muted-foreground">Basic string operations</p>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Phase 2: Intermediate Data Structures & Algorithms (2-3 Months)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">Goal</Badge>
            <span className="text-sm">Dive into non-linear structures and common algorithmic paradigms</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Trees</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Binary Trees (traversal, properties)</li>
                <li>• Binary Search Trees (operations, balancing)</li>
                <li>• Heaps (Min-Heap, Max-Heap)</li>
                <li>• Tries (Prefix Trees)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Graphs</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Representation (Matrix, List)</li>
                <li>• Traversal (BFS, DFS)</li>
                <li>• Applications (connectivity, cycles)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Searching & Sorting</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Linear Search, Binary Search</li>
                <li>• Bubble, Selection, Insertion Sort</li>
                <li>• Merge Sort, Quick Sort, Heap Sort</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Algorithmic Paradigms</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Recursion & Backtracking</li>
                <li>• Divide and Conquer</li>
                <li>• Greedy Algorithms</li>
                <li>• Dynamic Programming (intro)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Phase 3: Advanced Topics & Problem Solving (2-3 Months)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">Goal</Badge>
            <span className="text-sm">Tackle complex problems and specialize in advanced techniques</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Advanced Trees</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• AVL Trees, Red-Black Trees</li>
                <li>• Segment Trees, Fenwick Trees</li>
                <li>• Disjoint Set Union (DSU)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Advanced Graphs</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• MST (Prim's, Kruskal's)</li>
                <li>• Shortest Path (Dijkstra's, Bellman-Ford)</li>
                <li>• Topological Sort, SCC</li>
                <li>• Network Flow (basic)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Advanced DP</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Knapsack problems</li>
                <li>• Longest Common Subsequence</li>
                <li>• Matrix Chain Multiplication</li>
                <li>• Various DP patterns</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Specialized Algorithms</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• String Algorithms (KMP, Rabin-Karp)</li>
                <li>• Bit Manipulation</li>
                <li>• Mathematical Algorithms</li>
                <li>• Number Theory basics</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Phase 4: Practice & Application (Ongoing)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">Goal</Badge>
            <span className="text-sm">
              Solidify knowledge through consistent practice and explore real-world relevance
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Consistent Practice</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Daily/weekly problem solving</li>
                <li>• LeetCode, HackerRank, AlgoExpert</li>
                <li>• Focus on different categories</li>
                <li>• Mock interviews</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Understanding Trade-offs</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• When to use which data structure</li>
                <li>• Space vs. Time complexity</li>
                <li>• Algorithm selection criteria</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Real-World Application</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Database indexing</li>
                <li>• Network routing</li>
                <li>• Search engines</li>
                <li>• System Design basics</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Learning from Solutions</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Understand optimal solutions</li>
                <li>• Analyze different approaches</li>
                <li>• Time and space complexity analysis</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Key Tips for Success</h3>
            <div className="grid gap-2 md:grid-cols-3 text-sm">
              <Badge variant="outline" className="justify-center py-2">
                Practice Consistently
              </Badge>
              <Badge variant="outline" className="justify-center py-2">
                Understand Big O
              </Badge>
              <Badge variant="outline" className="justify-center py-2">
                Implement from Scratch
              </Badge>
              <Badge variant="outline" className="justify-center py-2">
                Learn by Explaining
              </Badge>
              <Badge variant="outline" className="justify-center py-2">
                Use Visualizers
              </Badge>
              <Badge variant="outline" className="justify-center py-2">
                {"Don't Memorize"}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
