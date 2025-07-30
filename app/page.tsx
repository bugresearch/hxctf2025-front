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
  Github,
  Twitter,
  Instagram,
  Mail,
  Award,
  Zap,
  Code,
  Search,
  Eye,
  Hash,
  LinkedinIcon,
  YoutubeIcon,
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
    {
      question: "CTF Nedir?",
      answer:
        " CTF (Capture The Flag), siber güvenlik alanında düzenlenen bir yarışmadır. Katılımcılar, çeşitli kategorilerdeki güvenlik zafiyetlerini tespit edip çözerek bayrak (flag) elde ederler.",
    },
    {
      question: "Kimler Katılabilir?",
      answer:
        " Lise, üniversite öğrencileri veya siber güvenliğe ilgi duyan herkes katılabilir. Takım halinde katılım teşvik edilir, ancak bireysel katılım da mümkündür. Final aşamasına sadece takımlar kabul edilecektir.",
    },
    {
      question: "Katılım ücreti var mı?",
      answer: " Hayır, Hacktorx CTF tamamen ücretsizdir.",
    },
    {
      question: "Ön eleme nasıl yapılacak?",
      answer: " Ön eleme, çevrimiçi (online) olarak gerçekleşecektir. En yüksek puanı alan takımlar final turuna davet edilecektir.",
    },
    {
      question: "Final turu nerede gerçekleşecek?",
      answer: "Final turu Bilişim Vadisi İstanbul Kampüsünde fiziksel olarak gerçekleştirilecektir. Detaylar ön eleme sonrasında duyurulacaktır.",
    },
    {
      question: "Hangi kategorilerde sorular olacak?",
      answer: " Web güvenliği, OSINT (Açık Kaynak İstihbarat), Tersine Mühendislik, Kriptografi ve Adli Bilişim (Forensics) gibi alanlarda sorular yer alacaktır.",
    },
    {
      question: "Hangi araçlar ya da yazılımlar gerekli?",
      answer: " Tarayıcı, VPN (gerektiğinde), Linux terminali, Burp Suite, Wireshark gibi temel güvenlik araçlarına hâkim olmanız önerilir.",
    },
    {
      question: "CTF platformuna nasıl giriş yapacağız?",
      answer: "CTF platformumuzun erişim bilgileri yarışma günü sizlere mail yoluyla iletilecektir. Bu konuda yaşayabileceğiniz teknik bir aksaklıkta ctf@hacktorx.com mail adresinden destek alabilirsiniz.",
    },
    {
      question: "Önceden hazırlık yapmam gerekir mi?",
      answer: "Evet, özellikle önceki CTF sorularını çözmek, TryHackMe, Hack The Box gibi platformlarda pratik yapmak faydalı olacaktır.",
    },
    {
      question: "CTF süresince destek olacak mı?",
      answer: "Slack üzerinden destek ve duyuru kanallarımız açık olacaktır. Teknik sorulara yalnızca sistemsel hatalarla ilgili cevap verilecektir.",
    },
    {
      question: "Sorular İngilizce mi Türkçe mi olacak?",
      answer: " Tüm sorular ve yönlendirmeler Türkçe olacaktır.",
    },
    {
      question: "Bayrak formatı nasıl olacak?",
      answer: "Flag formatı şu şekilde olacaktır: hxCTF{...}. Her soruda bu yapıda bir flag aranacaktır.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Matrix Background Effect */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#33cc00]/5 to-transparent animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#33cc00]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-[#33cc00]"><img src="hxlogo.png" style={{height: 28 }} alt="" /></div>
            <div className="hidden md:flex space-x-6">
              {["hero", "hakkında", "takvim", "ödüller", "sss"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-[#33cc00] ${
                    activeSection === section ? "text-[#33cc00]" : "text-gray-400"
                  }`}
                >
                  {section === "hero" ? "Anasayfa" : section.replace("", " ")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%2333cc00%22 fillOpacity%3D%220.05%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-[#33cc00] to-white bg-clip-text text-transparent animate-pulse">
              HacktorX CTF 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">Dijital savaş alanını keşfetmeye hazır mısnız?</p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className="text-lg text-[#33cc00] mb-4">Kayıtların Açılmasına:</h3>
            <div className="flex justify-center space-x-4 md:space-x-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-gray-900/50 border border-[#33cc00]/30 rounded-lg p-4 min-w-[80px]">
                    <div className="text-2xl md:text-3xl font-bold text-[#33cc00]">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={() => scrollToSection("hakkında")}
            className="bg-[#33cc00] hover:bg-[#33cc00]/80 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#33cc00]/25"
          >
            Bilgi Edinin
          </Button>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#33cc00]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkında" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#33cc00]">Hacktorx CTF Hakkında</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hacktorx CTF, HactorX ekibi tarafından 2023 yılından itibaren geleneksel bir şekilde her yıl düzenlenen CTF etkinliğidir. 2023 ve 2024 yıllarında yarışmamız Elazığ ilinde düzenlenmiştir. 2025 yarışmamız ise Sanayi ve Teknoloji Bakanlığı, Bilişim Vadisi katkılarıyla İstanbul'da düzenlenecektir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="bg-gray-900/50 border-[#33cc00]/30">
              <CardHeader>
                <CardTitle className="text-[#33cc00] flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Yarışma Formatı
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Online Ön Eleme</h4>
                  <p className="text-gray-400">23 Ağustos 2025 • 12 saat • Uzaktan</p>
                </div>
                <Separator className="bg-[#33cc00]/20" />
                <div>
                  <h4 className="font-semibold text-white mb-2">Final Aşaması</h4>
                  <p className="text-gray-400">25 Ekim 2025 • Bilişim Vadisi, İstanbul</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-[#33cc00]/30">
              <CardHeader>
                <CardTitle className="text-[#33cc00] flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Takım Gereksinimleri
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• 2-4 ekip üyesi</li>
                  <li>• Orta - üst düzey siber güvenlik yetkinliği</li>
                  <li>• Takım lideri</li>
                  <li>• Ücretsiz kayıt</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-[#33cc00]">Soru Kategorileri</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/30 border-[#33cc00]/20 hover:border-[#33cc00]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#33cc00]/10"
                >
                  <CardContent className="p-6 text-center">
                    <category.icon className="w-12 h-12 text-[#33cc00] mx-auto mb-4" />
                    <h4 className="font-semibold text-white mb-2">{category.name}</h4>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="takvim" className="py-20 bg-gray-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#33cc00]">Etkinlik Zaman Çizgisi</h2>
            <p className="text-xl text-gray-300">Etkinlik için önemli günlerin çizelgesidir.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#33cc00]/30"></div>

              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <Card className="bg-gray-900/50 border-[#33cc00]/30">
                      <CardContent className="p-6">
                        <Badge className="bg-[#33cc00]/20 text-[#33cc00] mb-3">{event.date}</Badge>
                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                        <p className="text-gray-400">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#33cc00] rounded-full border-4 border-black"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="ödüller" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#33cc00]">Ödül ve Promosyonlar</h2>
            <p className="text-xl text-gray-300">Ödüller ilerleyen aşamalarda açıklanacaktır.</p>
          </div>
          {/* 
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-b from-yellow-500/10 to-gray-900/50 border-yellow-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <CardHeader className="text-center">
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <CardTitle className="text-2xl text-yellow-500">1st Place</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$5,000</div>
                <p className="text-gray-300">+ Premium swag package</p>
                <p className="text-gray-300">+ Certificate of achievement</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-gray-400/10 to-gray-900/50 border-gray-400/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 to-gray-500"></div>
              <CardHeader className="text-center">
                <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gray-400">2nd Place</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$3,000</div>
                <p className="text-gray-300">+ Swag package</p>
                <p className="text-gray-300">+ Certificate of achievement</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-orange-600/10 to-gray-900/50 border-orange-600/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-700"></div>
              <CardHeader className="text-center">
                <Award className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-orange-600">3rd Place</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$1,500</div>
                <p className="text-gray-300">+ Swag package</p>
                <p className="text-gray-300">+ Certificate of achievement</p>
              </CardContent>
            </Card>
          </div>
         */}
        </div>
      </section>

      <section id="sponsorlar" className="py-20">
        <div className="container mx-auto px-4">
            <div className="text-center">
            <h3 className="text-5xl font-bold mb-16 text-[#33cc00]">Sponsor ve Organizatörler</h3>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-4 md:space-y-0 opacity-80">
              <div className="p-5 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-400"><img src="hxlogo.png" style={{ width: 350, height: 50 }} /></span>
              </div>
              <div className="p-5 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-400"><img src="42logo.png" style={{ width: 135, height: 50 }} /></span>
              </div>
              <div className="p-5 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-400"><img src="bvlogo.png" style={{ width: 250, height: 50 }} /></span>
              </div>
              <div className="p-5 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-400"><img src="bklogo.png" style={{ width: 250, height: 50 }} /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
<section id="register" className="py-20 bg-gray-900/20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#33cc00]">Takım Kaydı</h2>
      <p className="text-xl text-gray-300">
        Yarışmaya katılarak siber güvenlik yetkinliklerinizi ölçün
      </p>
    </div>

    <Card className="max-w-4xl mx-auto bg-gray-900/50 border-[#33cc00]/30">
      <CardContent className="p-8">
        <form
          className="space-y-8"
          action="https://api.hacktorx.com/api/ctf/register"
          method="POST"
        >
          <div>
            <Label
              htmlFor="teamName"
              className="text-lg font-semibold text-[#33cc00]"
            >
              Takım Adı *
            </Label>
            <Input
              id="teamName"
              name="teamName"
              className="mt-2 bg-gray-800 border-gray-700 text-white focus:border-[#33cc00]"
              placeholder="Takım Adınızı Giriniz"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#33cc00] mb-4">
              Team Members (up to 4)
            </h3>

            {[1, 2, 3, 4].map((memberNum) => (
              <Card
                key={memberNum}
                className="mb-4 bg-gray-800/50 border-gray-700"
              >
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    Yarışmacı {memberNum}
                    {memberNum !== 4 && (
                      <Badge className="bg-[#33cc00]/20 text-[#33cc00]">
                        Gerekli
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300">İsim Soyisim</Label>
                    <Input
                      className="mt-1 bg-gray-700 border-gray-600 text-white focus:border-[#33cc00]"
                      name={`nameSurname${memberNum}`}
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">E-Posta Adresi</Label>
                    <Input
                      type="email"
                      className="mt-1 bg-gray-700 border-gray-600 text-white focus:border-[#33cc00]"
                      name={`email${memberNum}`}
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Telefon Numarası</Label>
                    <Input
                      className="mt-1 bg-gray-700 border-gray-600 text-white focus:border-[#33cc00]"
                      name={`phone${memberNum}`}
                    />
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

  {/* Form submit için hidden input */}
  <input
    type="hidden"
    name={`tshirt${memberNum}`}
    value={tshirtSizes[memberNum] || ""}
  />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Label className="text-lg font-semibold text-[#33cc00]">
              Takım Lideri *
            </Label>
            <RadioGroup
              value={teamLeader}
              onValueChange={setTeamLeader}
              className="mt-2"
              name="leader"
            >
              {[1, 2, 3, 4].map((memberNum) => (
                <div key={memberNum} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={`member${memberNum}`}
                    id={`leader${memberNum}`}
                  />
                  <Label
                    htmlFor={`leader${memberNum}`}
                    className="text-gray-300"
                  >
                    Yarışmacı {memberNum}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="consent" name="kvkk" />
            <Label htmlFor="consent" className="text-gray-300">
              Kişisel verilerimin KVKK Aydınlatma Metni kapsamında HacktorX
              tarafından işlenmesine izin veriyorum. *
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


      {/* FAQ Section */}
      <section id="sss" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#33cc00]">Sıkça Sorulan Sorular</h2>
            <p className="text-xl text-gray-300">Hacktorx CTF hakkında sıklıkla sorulan sorular</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gray-900/50 border-[#33cc00]/30">
                <CardHeader>
                  <CardTitle className="text-[#33cc00]">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-[#33cc00]/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-[#33cc00] mb-4">Hacktorx CTF</div>
              <p className="text-gray-400">Dijital savaş alanını keşfetmeye hazır mısnız?</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">İletişim</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>ctf@hacktorx.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Bizi Takip Et</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#33cc00]">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#33cc00]">
                  <LinkedinIcon className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#33cc00]">
                  <YoutubeIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <Separator className="bg-[#33cc00]/20 mb-8" />

          <div className="text-center text-gray-400">
            <p>Powered by Hacktorx Team | © 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
