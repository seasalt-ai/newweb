#!/bin/bash

# Fix App.tsx - Remove unused HelmetProvider
sed -i '/import { HelmetProvider } from '\''react-helmet-async'\'';/d' src/App.tsx

# Fix Channels.tsx - Remove unused imports and variables
sed -i 's/import { MessageSquare, Phone, MessageCircle, Instagram, Mail, Globe, Smartphone, FileText, Monitor } from '\''lucide-react'\'';/import { MessageSquare, Phone, MessageCircle, Monitor } from '\''lucide-react'\'';/' src/components/Channels.tsx
sed -i 's/const { t, i18n } = useTranslation();/const { i18n } = useTranslation();/' src/components/Channels.tsx

# Fix Footer.tsx - Remove unused Bot import  
sed -i 's/import { Phone, Mail, MapPin, MessageSquare, Bot, BarChart3 } from '\''lucide-react'\'';/import { Phone, Mail, MapPin, MessageSquare, BarChart3 } from '\''lucide-react'\'';/' src/components/Footer.tsx

# Fix LanguageSwitcher.tsx - Remove unused hash
sed -i 's/const { pathname, hash } = location;/const { pathname } = location;/' src/components/LanguageSwitcher.tsx

# Fix MarkdownPage.tsx - Remove unused lang
sed -i 's/const { lang } = useParams<{ lang: string }>();/useParams<{ lang: string }>();/' src/components/MarkdownPage.tsx

# Fix Blog.tsx - Remove unused imports and variables
sed -i 's/import React, { useState, useEffect } from '\''react'\'';/import { useState, useEffect } from '\''react'\'';/' src/pages/Blog.tsx
sed -i 's/import { loadAllBlogPosts, BlogPostMeta, getAllBlogSlugs } from '\''..\/utils\/markdown'\'';/import { loadAllBlogPosts, BlogPostMeta } from '\''..\/utils\/markdown'\'';/' src/pages/Blog.tsx
sed -i 's/const { t, i18n } = useTranslation();/const { i18n } = useTranslation();/' src/pages/Blog.tsx

# Fix BlogPost.tsx - Remove unused imports and variables
sed -i 's/import React, { useState, useEffect } from '\''react'\'';/import { useState, useEffect } from '\''react'\'';/' src/pages/BlogPost.tsx
sed -i 's/const { t, i18n } = useTranslation();/const { i18n } = useTranslation();/' src/pages/BlogPost.tsx

# Fix ChannelsOverview.tsx - Remove unused React import
sed -i '/import React from '\''react'\'';/d' src/pages/ChannelsOverview.tsx

# Fix CompareUsOverview.tsx - Remove unused React import and categories
sed -i '/import React from '\''react'\'';/d' src/pages/CompareUsOverview.tsx

# Fix Pricing.tsx - Remove unused imports
sed -i 's/import React, { useState } from '\''react'\'';/import { useState } from '\''react'\'';/' src/pages/Pricing.tsx
sed -i 's/import { Check, Star, ArrowLeft, ChevronDown } from '\''lucide-react'\'';/import { Check, Star, ChevronDown } from '\''lucide-react'\'';/' src/pages/Pricing.tsx

# Fix ContactForms.tsx - Remove unused imports
sed -i '/import React from '\''react'\'';/d' src/pages/channels/ContactForms.tsx
sed -i 's/import { FileText, Zap, Users, BarChart3, Mail, Globe, ArrowLeft } from '\''lucide-react'\'';/import { FileText, Zap, Users, BarChart3, Globe, ArrowLeft } from '\''lucide-react'\'';/' src/pages/channels/ContactForms.tsx

# Fix WhatsApp.tsx - Remove unused imports
sed -i '/import React from '\''react'\'';/d' src/pages/channels/WhatsApp.tsx
sed -i 's/import { MessageCircle, Check, Shield, Globe, Bot, Users, ArrowLeft } from '\''lucide-react'\'';/import { MessageCircle, Shield, Globe, Bot, Users, ArrowLeft } from '\''lucide-react'\'';/' src/pages/channels/WhatsApp.tsx

# Fix AircallAlternative.tsx - Remove unused imports
sed -i '/import React from '\''react'\'';/d' src/pages/compare/AircallAlternative.tsx
sed -i 's/import { ArrowLeft, Check, X, AlertCircle } from '\''lucide-react'\'';/import { ArrowLeft, Check, X } from '\''lucide-react'\'';/' src/pages/compare/AircallAlternative.tsx

# Fix RespondIoAlternative.tsx - Remove unused imports
sed -i '/import React from '\''react'\'';/d' src/pages/compare/RespondIoAlternative.tsx
sed -i 's/import { ArrowLeft, Check, X, AlertCircle } from '\''lucide-react'\'';/import { ArrowLeft, Check, AlertCircle } from '\''lucide-react'\'';/' src/pages/compare/RespondIoAlternative.tsx

# Fix CustomerSupport.tsx - Remove unused imports
sed -i '/import React from '\''react'\'';/d' src/pages/solutions/CustomerSupport.tsx
sed -i 's/import { ArrowLeft, Check, Star, Headphones, Clock, Users, Shield, BarChart3, Zap, Heart } from '\''lucide-react'\'';/import { ArrowLeft, Check, Headphones, Clock, Users, Shield, BarChart3, Zap, Heart } from '\''lucide-react'\'';/' src/pages/solutions/CustomerSupport.tsx

# Fix SalesMarketing.tsx - Remove unused imports
sed -i '/import React from '\''react'\'';/d' src/pages/solutions/SalesMarketing.tsx
sed -i 's/import { ArrowLeft, Check, Star, TrendingUp, Target, Megaphone, BarChart3, Users, Zap, DollarSign } from '\''lucide-react'\'';/import { ArrowLeft, Check, Star, TrendingUp, Target, Megaphone, Zap } from '\''lucide-react'\'';/' src/pages/solutions/SalesMarketing.tsx

# Fix many more files with React imports...
for file in src/pages/{FacebookMessenger,Instagram,Line,PhoneCalls,SMS,WebsiteChat,WebsiteWidget}.tsx; do
  sed -i '/import React from '\''react'\'';/d' "$file"
done

for file in src/pages/compare/{AvayaAlternative,DialpadAlternative,EightXEightAlternative,Five9Alternative,GenesysAlternative,GoogleVoiceAlternative,IntercomAlternative,KustomerAlternative,OpenPhoneAlternative,RingCentralAlternative,ThreeCXAlternative}.tsx; do
  sed -i '/import React from '\''react'\'';/d' "$file"
done

for file in src/pages/industries/{AutomotiveServices,Ecommerce,EducationTraining,FinancialServices,Healthcare,ProfessionalServices,RealEstate,RestaurantsHospitality}.tsx; do
  sed -i '/import React from '\''react'\'';/d' "$file"
done

for file in src/pages/solutions/{AIAutomation,SmeOwners}.tsx; do
  sed -i '/import React from '\''react'\'';/d' "$file"
done

# Fix SeaChat components - Remove unused React imports
for file in src/seachat/components/{BlogSection,Footer,KeyFeatures,UseCases}.tsx; do
  sed -i '/import React from '\''react'\'';/d' "$file"
done

for file in src/seachat/pages/{BlogPage,BlogPostPage,PricingPage}.tsx; do
  sed -i 's/import React, { /import { /' "$file"
done

# Fix all remaining seachat page files with React imports
for file in src/seachat/pages/features/{AIAutomationPage,APIPage,AdvancedAIPage,HumanAgentsPage,KnowledgeBasePage,VoiceAgentsPage}.tsx; do
  sed -i '/import React from '\''react'\'';/d' "$file"
done

for file in src/seachat/pages/integrations/{CRMPage,CalendarPage,EcommercePage,IntegrationAPIPage,MarketingPage,SocialMediaPage,WebsitesPage}.tsx; do
  sed -i '/import React from '\''react'\'';/d' "$file"
done

for file in src/seachat/pages/solutions/{EcommerceSolutionPage,EducationPage,FintechPage,HealthcarePage,RealEstatePage,SaaSPage,SmallBusinessPage,TravelPage}.tsx; do
  sed -i '/import React from '\''react'\'';/d' "$file"
done

echo "Final cleanup complete!"
