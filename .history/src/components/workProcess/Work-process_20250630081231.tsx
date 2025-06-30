import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WorkProcess() {
  const processes = [
    {
      title: "Discovery",
      description:
        "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
      bgColor: "bg-black",
      tagColor: "bg-cyan-300 text-black",
    },
    {
      title: "Strategy",
      description:
        "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
      bgColor: "bg-lime-400",
      tagColor: "bg-black text-lime-400",
    },
    {
      title: "Design",
      description:
        "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
      bgColor: "bg-black",
      tagColor: "bg-cyan-300 text-black",
    },
    {
      title: "Build",
      description:
        "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
      bgColor: "bg-black",
      tagColor: "bg-cyan-300 text-black",
    },
  ]

  return (
    <div className="min-h-screen bg-[#141414] text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <span className="px-4 py-2 rounded-full border border-gray-600 text-sm">Work Process</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl font-bold text-center mb-16">My Work Process</h1>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {processes.map((process, index) => (
            <Card
              key={index}
              className={`${process.bgColor} border-0 p-8 rounded-3xl  ${
                process.bgColor === "bg-lime-400 " ? "text-black" : "text-white"
              }`}
            >
              <CardContent className="p-0 ">
                <div className="flex items-center justify-between mb-6 ">
                  <span className={`${process.tagColor} px-4 py-2 rounded-full text-sm font-medium `}>
                    {process.title}
                  </span>
                  <Button
                    variant="link"
                    className={`${
                      process.bgColor === "bg-lime-400"
                        ? "text-black hover:text-gray-700"
                        : "text-white hover:text-gray-300"
                    } p-0 h-auto font-normal`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <p
                  className={`text-lg leading-relaxed ${
                    process.bgColor === "bg-lime-400" ? "text-gray-800" : "text-gray-300"
                  }`}
                >
                  {process.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
