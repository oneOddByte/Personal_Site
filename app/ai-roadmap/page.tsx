import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, BookOpen, Code, Zap } from "lucide-react"

export default function AIRoadmapPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight flex items-center justify-center gap-3">
          <Brain className="h-10 w-10 text-primary" />
          How to REALLY Learn AI
        </h1>
        <p className="text-xl text-muted-foreground">Beyond Syntax - A Deep Understanding Approach</p>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Embrace the Math
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Linear Algebra</h4>
              <p className="text-sm text-muted-foreground">
                Essential for understanding neural network operations (vectors, matrices, matrix multiplication).
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Calculus</h4>
              <p className="text-sm text-muted-foreground">
                Crucial for <strong>backpropagation</strong> (derivatives, chain rule).
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Probability & Statistics</h4>
              <p className="text-sm text-muted-foreground">
                Fundamental for data understanding, model evaluation, and probabilistic models.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Understand Algorithms from First Principles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Badge variant="outline" className="mt-0.5">
                1
              </Badge>
              <div>
                <p>
                  Implement basic ML algorithms (Linear/Logistic Regression, simple Neural Network){" "}
                  <strong>from scratch using only NumPy</strong>.
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Focus on <strong>backpropagation</strong>.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Badge variant="outline" className="mt-0.5">
                2
              </Badge>
              <div>
                <p>
                  For every algorithm, ask: What problem does it solve? How does it make decisions? What's its math? How
                  is it trained? What are its limitations?
                </p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Dive into Core Deep Learning Concepts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Neural Network Architecture</h4>
              <p className="text-sm text-muted-foreground">
                Understand what a layer is, what a neuron does, different activation functions (Sigmoid, ReLU, Tanh),
                and why they are used.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Loss Functions</h4>
              <p className="text-sm text-muted-foreground">
                Understand the purpose of loss functions (e.g., Mean Squared Error for regression, Cross-Entropy for
                classification) and how they quantify error.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Optimizers</h4>
              <p className="text-sm text-muted-foreground">
                Go beyond just calling <code className="bg-muted px-1 rounded">model.compile(optimizer='adam')</code>.
                Understand what gradient descent is, how learning rate affects it, and the motivations behind optimizers
                like Adam, RMSprop, and SGD with momentum.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Regularization</h4>
              <p className="text-sm text-muted-foreground">
                Understand why techniques like L1/L2 regularization, dropout, and batch normalization are used to
                prevent overfitting.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">CNNs</h4>
              <p className="text-sm text-muted-foreground">
                {
                  'Don\'t just know "conv2d." Understand what a convolution operation is, how filters extract features, the purpose of pooling layers, and how they build hierarchical representations.'
                }
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">RNNs & Transformers</h4>
              <p className="text-sm text-muted-foreground">
                Understand how these architectures handle sequential data and the concept of "attention."
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Utilize the Right Resources</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-semibold mb-2">Courses</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  • <strong>Andrew Ng's Courses:</strong> Machine Learning Specialization, Deep Learning Specialization
                </li>
                <li>
                  • <strong>Online University Courses:</strong> Free MIT/Stanford/CMU lectures (CS229, CS231n)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Books & Resources</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow"</li>
                <li>• "Deep Learning" by Goodfellow et al.</li>
                <li>• Deep-dive blogs with underlying math</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Learning is Key</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge>Derive</Badge>
                <span className="text-sm">Write out loss functions and gradients on paper</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge>Visualize</Badge>
                <span className="text-sm">Draw diagrams of networks and operations</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge>Explain</Badge>
                <span className="text-sm">If you can teach it, you understand it</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge>Experiment</Badge>
                <span className="text-sm">Intentionally break code, change parameters, observe</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/20 bg-destructive/5">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">Bottom Line</h3>
            <p className="text-muted-foreground">
              Learning <code className="bg-muted px-1 rounded">model.fit()</code> without understanding{" "}
              <strong>gradient descent</strong> or <strong>backpropagation</strong> isn't learning AI; it's just
              learning a library's API.
            </p>
            <p className="text-sm font-medium">
              Prioritize fundamental math, build from scratch, and then apply libraries. It's harder, but it's the only
              way to become a true AI practitioner.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
