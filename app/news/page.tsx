import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, MapPin, Clock } from "lucide-react"

// This would typically come from an API or database
const newsData = {
  lastUpdated: "05-05-2025 07:52:59",
  tamilNadu: [
    {
      title: "On SC's Waqf hearing eve, DMK says 95% stakeholders before JPC was against amendments",
      url: "https://www.thehindu.com/news/national/on-scs-waqf-hearing-eve-dmk-says-95-stakeholders-before-jpc-was-against-amendments/article69538178.ece",
      featured: false,
    },
    {
      title: "Rain and thunderstorm take Chennai by surprise",
      url: "https://www.thehindu.com/news/national/tamil-nadu/rain-and-thunderstorm-take-chennai-by-surprise/article69538142.ece",
      featured: true,
    },
    {
      title: "Broadway bus terminus in city awaits revamp",
      url: "https://www.thehindu.com/news/cities/chennai/broadway-bus-terminus-in-city-awaits-revamp/article69537410.ece",
      featured: true,
    },
    {
      title: "Over 6,700 candidates appear for NEET in Coimbatore across 14 centres",
      url: "https://www.thehindu.com/news/cities/Coimbatore/over-6700-candidates-appear-for-neet-in-coimbatore-across-14-centres/article69538354.ece",
      featured: true,
    },
  ],
  world: [
    "Syrian security forces 'oversaw' armed civilians who killed Alawites, accused man says",
    "Israeli army starts calling up reservists for planned expansion to Gaza offensive",
    "Nationalist Simion ahead in Romanian election rerun",
    "27 lives per kilometre: How Russia took record losses in Ukraine in 2024",
    "Peru kidnapping leaves 13 dead in gold mine",
  ],
  tamil: [
    "'பஹல்காம் தாக்குதலுக்கு உளவுத்துறை தோல்வியே காரணம்' - முன்னாள் ரா தலைவர் பிபிசிக்கு பேட்டி",
    "PBKS vs LSG: லக்னெளவை சாய்த்த பஞ்சாபின் இரு துருப்புச் சீட்டுகள்!",
    "திருமணத்துக்கு ஆன்லைனில் வரன் தேடும்போது மோசடிகளை தவிர்க்கும் 10 வழிகள்",
    "அரச குடும்பத்துடன் மீண்டும் இணைய விரும்பும் இளவரசர் ஹாரி",
  ],
}

export default function NewsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight flex items-center justify-center gap-3">
          <Globe className="h-10 w-10 text-primary" />
          News Dashboard
        </h1>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span className="text-sm">Last updated: {newsData.lastUpdated}</span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Tamil Nadu Headlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Tamil Nadu Headlines
              <Badge variant="secondary">{newsData.tamilNadu.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {newsData.tamilNadu.slice(0, 8).map((item, index) => (
                <div key={index} className="group">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-lg hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p
                          className={`text-sm leading-relaxed group-hover:text-primary transition-colors ${
                            item.featured ? "font-medium" : ""
                          }`}
                        >
                          {item.title}
                        </p>
                        {item.featured && (
                          <Badge variant="outline" className="mt-1 text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* World Headlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              World Headlines
              <Badge variant="secondary">{newsData.world.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {newsData.world.slice(0, 8).map((headline, index) => (
                <div key={index} className="group">
                  <div className="p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-relaxed group-hover:text-primary transition-colors">{headline}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tamil Headlines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-lg">தமிழ்</span>
            Tamil Headlines
            <Badge variant="secondary">{newsData.tamil.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {newsData.tamil.slice(0, 8).map((headline, index) => (
              <div key={index} className="group">
                <div className="p-3 rounded-lg hover:bg-muted/50 transition-colors border border-border/50">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed group-hover:text-primary transition-colors">{headline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">News Sources</h3>
            <p className="text-sm text-muted-foreground">
              Headlines aggregated from The Hindu, BBC Tamil, and other trusted news sources.
            </p>
            <p className="text-xs text-muted-foreground">Click on Tamil Nadu headlines to read the full articles.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
