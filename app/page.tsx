"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Shield,
  Trophy,
  Users,
  ChevronDown,
  Mail,
  Award,
  Zap,
  Code,
  Search,
  Eye,
  Hash,
  LinkedinIcon,
  YoutubeIcon,
  Instagram,
} from "lucide-react"

export default function HacktorxCTF() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [teamLeader, setTeamLeader] = useState("")
  const [activeSection, setActiveSection] = useState("hero")
  const [tshirtSizes, setTshirtSizes] = useState<{ [key: number]: string }>({})

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date("2025-08-01T10:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "hakkında", "takvim", "ödüller", "sss"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const timelineEvents = [
    { date: "1 Ağustos 2025", title: "Kayıtların Açılması", description: "Takım kayıtlarını açılacaktır." },
    { date: "27 Ağustos 2025", title: "Online Eleme", description: "Online eleme gerçekleştirilecektir." },
    { date: "8 Eylül 2025", title: "Finalistlerin Açıklanması", description: "Online eleme sonrasında asil ve yedek katılımcı ekipler belirlenecektir." },
    { date: "25 Ekim 2025", title: "Final Aşaması", description: "Final aşaması İstanbul'da yüzyüze gerçekleştirilecektir." },
  ]

  const categories = [
    { icon: Code, name: "Web Security", description: "Web Uygulama Güvenliği" },
    { icon: Search, name: "OSINT", description: "Açık Kaynak İstihbaratı" },
    { icon: Zap, name: "Reverse Engineering", description: "Tersine Mühendislik" },
    { icon: Eye, name: "Forensics", description: "Adli Bilişim" },
    { icon: Hash, name: "Cryptography", description: "Şifreleme" },
    { icon: Hash, name: "Network", description: "Ağ Güvenliği" },
    { icon: Hash, name: "AI/ML", description: "Yapay Zeka ve LLM Güvenliği" },
    { icon: Hash, name: "Pwn", description: "Zafiyetli Makine Çözümü" },
  ]

  const faqs = [
    { question: "CTF Nedir?", answer: "CTF (Capture The Flag), siber güvenlik alanında düzenlenen bir yarışmadır..." },
    // diğer FAQ'lar buraya
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* Registration Section */}
      <section id="register" className="py-20 bg-gray-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#33cc00]">Takım Kaydı</h2>
            <p className="text-xl text-gray-300">Yarışmaya katılarak siber güvenlik yetkinliklerinizi ölçün</p>
          </div>

          <Card className="max-w-4xl mx-auto bg-gray-900/50 border-[#33cc00]/30">
            <CardContent className="p-8">
              <form className="space-y-8" action="https://api.hacktorx.com/api/ctf/register" method="POST">
                <div>
                  <Label htmlFor="teamName" className="text-lg font-semibold text-[#33cc00]">Takım Adı *</Label>
                  <Input id="teamName" name="teamName" className="mt-2 bg-gray-800 border-gray-700 text-white focus:border-[#33cc00]" placeholder="Takım Adınızı Giriniz" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#33cc00] mb-4">Team Members (up to 4)</h3>
                  {[1, 2, 3, 4].map((memberNum) => (
                    <Card key={memberNum} className="mb-4 bg-gray-800/50 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center justify-between">
                          Yarışmacı {memberNum}
                          {memberNum !== 4 && <Badge className="bg-[#33cc00]/20 text-[#33cc00]">Gerekli</Badge>}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-gray-300">İsim Soyisim</Label>
                          <Input className="mt-1 bg-gray-700 border-gray-600 text-white focus:border-[#33cc00]" name={`nameSurname${memberNum}`} />
                        </div>
                        <div>
                          <Label className="text-gray-300">E-Posta Adresi</Label>
                          <Input type="email" className="mt-1 bg-gray-700 border-gray-600 text-white focus:border-[#33cc00]" name={`email${memberNum}`} />
                        </div>
                        <div>
                          <Label className="text-gray-300">Telefon Numarası</Label>
                          <Input className="mt-1 bg-gray-700 border-gray-600 text-white focus:border-[#33cc00]" name={`phone${memberNum}`} />
                        </div>
                        <div>
                          <Label className="text-gray-300">Tişört Bedeni</Label>
                          <Select
                            value={tshirtSizes[memberNum] || ""}
                            onValueChange={(val) =>
                              setTshirtSizes((prev) => ({ ...prev, [memberNum]: val }))
                            }
                          >
                            <SelectTrigger className="mt-1 bg-gray-700 border-gray-600 text-white">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="xs">XS</SelectItem>
                              <SelectItem value="s">S</SelectItem>
                              <SelectItem value="m">M</SelectItem>
                              <SelectItem value="l">L</SelectItem>
                              <SelectItem value="xl">XL</SelectItem>
                              <SelectItem value="xxl">XXL</SelectItem>
                            </SelectContent>
                          </Select>
                          <input type="hidden" name={`tshirt${memberNum}`} value={tshirtSizes[memberNum] || ""} />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div>
                  <Label className="text-lg font-semibold text-[#33cc00]">Takım Lideri *</Label>
                  <RadioGroup value={teamLeader} onValueChange={setTeamLeader} className="mt-2" name="leader">
                    {[1, 2, 3, 4].map((memberNum) => (
                      <div key={memberNum} className="flex items-center space-x-2">
                        <RadioGroupItem value={`member${memberNum}`} id={`leader${memberNum}`} />
                        <Label htmlFor={`leader${memberNum}`} className="text-gray-300">Yarışmacı {memberNum}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="consent" name="kvkk" />
                  <Label htmlFor="consent" className="text-gray-300">
                    Kişisel verilerimin KVKK Aydınlatma Metni kapsamında HacktorX tarafından işlenmesine izin veriyorum. *
                  </Label>
                </div>

                <Button className="w-full bg-[#33cc00] hover:bg-[#33cc00]/80 text-black font-bold py-3 text-lg">
                  Kayıt Ol
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
