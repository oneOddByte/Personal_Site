import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Camera, Zap, Target } from "lucide-react"

export default function OpenCVRoadmapPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight flex items-center justify-center gap-3">
          <Eye className="h-10 w-10 text-primary" />
          OpenCV Learning Roadmap
        </h1>
        <p className="text-xl text-muted-foreground">A comprehensive guide from beginner to advanced computer vision</p>
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
            <span className="text-sm">
              Understand the basics of programming, image representation, and simple image manipulations
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Prerequisites</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-0.5 text-xs">
                    Python
                  </Badge>
                  <span>Variables, data types, control flow, functions, basic OOP</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-0.5 text-xs">
                    NumPy
                  </Badge>
                  <span>Array creation, manipulation, broadcasting, basic operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-0.5 text-xs">
                    Matplotlib
                  </Badge>
                  <span>Displaying images and creating plots</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-0.5 text-xs">
                    Math
                  </Badge>
                  <span>Linear Algebra (vectors, matrices, basic operations)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">OpenCV Installation & Setup</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  • Install OpenCV for Python (<code className="bg-muted px-1 rounded">pip install opencv-python</code>)
                </li>
                <li>• Verify your installation</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-primary">OpenCV Basics (Image & Video I/O)</h4>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-4">
                <h5 className="font-medium mb-2">Image Operations</h5>
                <p className="text-xs text-muted-foreground">
                  Reading, displaying, saving, properties, color space conversions
                </p>
              </Card>
              <Card className="p-4">
                <h5 className="font-medium mb-2">Drawing Functions</h5>
                <p className="text-xs text-muted-foreground">Lines, circles, rectangles, ellipses, text</p>
              </Card>
              <Card className="p-4">
                <h5 className="font-medium mb-2">Video Operations</h5>
                <p className="text-xs text-muted-foreground">Reading/displaying/saving videos from files or webcams</p>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Phase 2: Image Processing Fundamentals (2-3 Months)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">Goal</Badge>
            <span className="text-sm">Understand core image manipulation techniques and feature extraction</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Image Transformations</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Geometric Transformations (resizing, cropping, translation, rotation)</li>
                <li>• Perspective Transformation (warping images)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Image Filtering & Smoothing</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Convolution (understanding the core operation)</li>
                <li>
                  • Averaging/Blurring (<code className="bg-muted px-1 rounded">cv2.blur</code>,{" "}
                  <code className="bg-muted px-1 rounded">cv2.GaussianBlur</code>)
                </li>
                <li>• Median Blurring, Bilateral Filtering</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Morphological Operations</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Erosion, Dilation, Opening, Closing</li>
                <li>• Understanding kernels and applications</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Thresholding & Segmentation</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Simple Thresholding (Binary, Otsu's, Adaptive)</li>
                <li>
                  • Edge Detection (Sobel, Scharr, Laplacian, <strong>Canny</strong>)
                </li>
                <li>• Contours (finding/drawing, properties, shape approximation)</li>
                <li>• Image Segmentation (Watershed, GrabCut)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Phase 3: Feature Detection & Description (2-3 Months)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">Goal</Badge>
            <span className="text-sm">
              Learn how to extract unique and robust features from images for object recognition and tracking
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Corner Detection</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Harris Corner Detector</li>
                <li>• Shi-Tomasi Corner Detector</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Feature Detection & Description</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• FAST (Features from Accelerated Segment Test)</li>
                <li>• ORB (Oriented FAST and Rotated BRIEF)</li>
                <li>• SIFT/SURF (foundational understanding)</li>
                <li>• Understanding keypoints and descriptors</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Feature Matching</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  • Brute-Force Matcher (<code className="bg-muted px-1 rounded">cv2.BFMatcher</code>)
                </li>
                <li>
                  • FLANN-based Matcher (<code className="bg-muted px-1 rounded">cv2.FlannBasedMatcher</code>)
                </li>
                <li>• Homography for robust matching</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Object Detection (Traditional)</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Haar Cascades (for face detection)</li>
                <li>• HOG + SVM</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Phase 4: Advanced Concepts & Deep Learning Integration (Ongoing)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">Goal</Badge>
            <span className="text-sm">
              Integrate OpenCV with modern deep learning frameworks and explore advanced computer vision tasks
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Deep Learning Fundamentals</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Neural Networks, CNNs</li>
                <li>• Familiarity with TensorFlow/Keras or PyTorch</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">{"OpenCV's DNN Module"}</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Loading pre-trained deep learning models</li>
                <li>• Image Classification (ResNet, VGG)</li>
                <li>• Object Detection (YOLO, SSD)</li>
                <li>• Semantic Segmentation, Face Recognition</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Tracking</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Object Tracking (MeanShift, CAMShift, KCF, CSRT)</li>
                <li>• Optical Flow (Lucas-Kanade, Farneback)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Other Advanced Topics</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Camera Calibration</li>
                <li>• Stereo Vision (depth estimation)</li>
                <li>• Image Stitching</li>
                <li>• Pose Estimation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Phase 5: Projects & Continuous Learning (Ongoing)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">Goal</Badge>
            <span className="text-sm">Apply your knowledge to real-world problems and stay updated</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Build Projects</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Start small, then increase complexity</li>
                <li>• Implement ideas from research</li>
                <li>• Participate in Kaggle competitions</li>
                <li>• Contribute to open-source</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Stay Updated</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Follow computer vision blogs (PyImageSearch, LearnOpenCV)</li>
                <li>• Read new research papers</li>
                <li>• Attend webinars/conferences</li>
                <li>• Experiment with new models</li>
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
                Hands-on Practice
              </Badge>
              <Badge variant="outline" className="justify-center py-2">
                Understand the Math
              </Badge>
              <Badge variant="outline" className="justify-center py-2">
                Read Documentation
              </Badge>
              <Badge variant="outline" className="justify-center py-2">
                Start Simple
              </Badge>
              <Badge variant="outline" className="justify-center py-2">
                Troubleshoot
              </Badge>
              <Badge variant="outline" className="justify-center py-2">
                Join Communities
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
