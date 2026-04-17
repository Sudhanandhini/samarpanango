import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { Target, Eye, CheckCircle, Users, GitBranch, UserCheck, ArrowRight, Heart, BookOpen, Sprout, Stethoscope, TrendingUp, Home } from 'lucide-react'
import img2 from '../assets/2.jpg';

const sections = {
  organization: {
    title: 'About Organization',
    icon: Users,
    content: (
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="font-heading text-2xl font-bold text-primary mb-5">Who We Are</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Samarpana Development Organization is a Registered Non-Government Organization at Sindhanur Block, 
            Raichur District, Karnataka State, set up and run by a team of dedicated and passionate professionals. 
            The organization is registered under the Karnataka State Society Act 1960 in the year 2000–2001.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Organization activity started with Integrated Education for Disabled Children (IEDC) project with 
            financial support by the Ministry of Human Resource Development, New Delhi (MHRD) in the year 2003. 
            After that, the organization implemented many programmes with support from the Central and State 
            Government in the fields of Education, Health, Environment, and MEDP for youth and women in rural 
            and urban areas.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The organization is also registered under Section 12AA of the Income Tax Act, 1961 (2007–2008), 
            and Section 80G (2010–2011), enabling donors to avail 50% tax exemption.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Samarpana is recognized by multiple government departments including the Department of E-Governance, 
            Women and Child Welfare, and Senior Citizens and Disabled Welfare — reaching thousands of 
            beneficiaries every year across Karnataka.
          </p>
        </div>
        <div>
          <img
            src={img2}
            alt="About Samarpana"
            className="rounded-3xl w-full h-80 object-cover shadow-xl"
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              { label: 'Founded', value: '2000' },
              { label: 'Districts Covered', value: '12+' },
              { label: 'Beneficiaries', value: '50,000+' },
              { label: 'Projects Completed', value: '80+' },
            ].map((s, i) => (
              <div key={i} className="bg-primary rounded-xl p-4 text-center">
                <div className="font-heading text-2xl font-bold text-accent">{s.value}</div>
                <div className="text-gray-300 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="md:col-span-2 mt-4">
          <h3 className="font-heading text-xl font-bold text-primary mb-5">Our Key Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Education for Disabled',
                desc: 'Started with IEDC project funded by MHRD, New Delhi, providing integrated education to disabled children since 2003.',
                color: 'text-blue-600 bg-blue-50',
              },
              {
                icon: Heart,
                title: 'Ashakira Children Home',
                desc: 'Running a home for orphans and poor children in Sindhanur since 2017. 30 children receive free education, lodging and boarding.',
                color: 'text-rose-600 bg-rose-50',
              },
              {
                icon: TrendingUp,
                title: 'Microfinance (NABARD BC)',
                desc: 'Working as Business Correspondent with NABARD Financial Services Ltd., providing loans to rural & urban women through SHG/JLG — ₹1.57 Cr outstanding.',
                color: 'text-green-600 bg-green-50',
              },
              {
                icon: Stethoscope,
                title: 'HIV/AIDS Link Worker Scheme',
                desc: 'Implementing LWS at Vijayapur District with KSAPS, covering 100 villages, conducting health camps and HIV awareness programmes.',
                color: 'text-purple-600 bg-purple-50',
              },
              {
                icon: Sprout,
                title: 'Skill Development & MEDP',
                desc: '250+ farmers, youth and SHG members trained in tailoring, dairy development, fashion designing and agriculture with NABARD/SELCO support.',
                color: 'text-amber-600 bg-amber-50',
              },
              {
                icon: Home,
                title: 'Community Development',
                desc: 'Health on Wheel mobile medical camps, Rural Health Clinic, and hostel building construction under CSR by Tektronix India Pvt. Ltd.',
                color: 'text-teal-600 bg-teal-50',
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-5 border border-gray-100 bg-white hover:shadow-md transition-shadow`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${item.color}`}>
                  <item.icon size={20} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },

  'vision-mission': {
    title: 'Vision & Mission',
    icon: Eye,
    content: (
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-primary rounded-3xl p-8 text-white">
          <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center mb-5">
            <Eye size={24} className="text-accent" />
          </div>
          <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-300 leading-relaxed">
            To work for the development of people in rural and urban areas, providing education, economic, 
            social and other necessary services.
          </p>
        </div>
        <div className="bg-accent rounded-3xl p-8 text-white">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
            <Target size={24} className="text-white" />
          </div>
          <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-white/90 leading-relaxed">
            To build and strengthen sustainable individual, family, institutional and community initiatives 
            for health and development and management.
          </p>
        </div>
        <div className="md:col-span-2 bg-cream rounded-3xl p-8">
          <h3 className="font-heading text-2xl font-bold text-primary mb-6">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['Integrity', 'Inclusiveness', 'Accountability', 'Community Participation', 'Transparency', 'Sustainability'].map(v => (
              <div key={v} className="flex items-center gap-3">
                <CheckCircle size={20} className="text-accent shrink-0" />
                <span className="text-gray-700 font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image row */}
        <div className="md:col-span-2 grid md:grid-cols-3 gap-4">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80"
            alt="Education"
            className="rounded-2xl h-48 w-full object-cover shadow"
          />
          <img
            src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&q=80"
            alt="Community Health"
            className="rounded-2xl h-48 w-full object-cover shadow"
          />
          <img
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&q=80"
            alt="Rural Development"
            className="rounded-2xl h-48 w-full object-cover shadow"
          />
        </div>
      </div>
    )
  },

  objectives: {
    title: 'Objectives',
    icon: Target,
    content: (
      <div>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
          Samarpana's work is guided by a set of strategic objectives that drive all our programs and partnerships:
        </p>

        {/* Objectives list */}
        <div className="bg-cream rounded-2xl p-6 mb-10">
          <ul className="space-y-3">
            {[
              'To take up special and integrated education for all categories of Disabled children in the society.',
              'To take up appropriate sustainable programmes for development of farmers in Agriculture.',
              'To take appropriate programmes for welfare of poor and needy women and children in the fields of Health, Education, and Economic Empowerment in rural and urban areas.',
              'To improve the availability of and access to quality health care by the people, especially for those residing in rural areas, the vulnerable women and children.',
              'To encourage income generating activities for self-help group members, women farmers, and youth for abolition of poverty.',
            ].map((obj, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">{i + 1}</span>
                {obj}
              </li>
            ))}
          </ul>
        </div>

        {/* Areas of Work */}
        <h3 className="font-heading text-xl font-bold text-primary mb-6">Areas of Work</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Education',
              desc: 'Organization believes Education is the main pillar of sustainable development. It focuses on Integrated Education for Disabled Children (IEDC) and runs the Ashakira Orphanage and Poor Children Home in Sindhanur since 2017, providing free education, lodging and boarding to 30 children.',
              icon: BookOpen, color: 'bg-blue-600',
            },
            {
              title: 'Disability',
              desc: 'Organization focuses on disabled persons for their education, health, and skill development programmes, working with government support and community volunteers.',
              icon: Heart, color: 'bg-rose-600',
            },
            {
              title: 'Health',
              desc: 'Health is a big asset of every human being. Organization implements Link Worker Scheme (LWS) at Vijayapur District under KSAPS, covering 100 high-risk villages with HIV prevention, health camps, and community-based health services.',
              icon: Stethoscope, color: 'bg-purple-600',
            },
            {
              title: 'Agriculture',
              desc: 'Agricultural education combined with community-based programmes can make a huge difference to peoples lives. Organization provides training, modern technology exposure, and government scheme linkages for rural farmers.',
              icon: Sprout, color: 'bg-green-600',
            },
            {
              title: 'Skill Development & Trainings',
              desc: 'Organization organizes training in tailoring, dairy development, fashion designing, Kundan work, and patch work for rural youth, women, farmers, teachers, and PRI members. 250+ trainees earned ₹500–₹1,000/day after training.',
              icon: TrendingUp, color: 'bg-amber-600',
            },
            {
              title: 'Microfinance (MEDP)',
              desc: 'Working as Business Correspondent with NABARD Financial Services Ltd., providing SHG/JLG loans to rural and urban women. 345 active loan accounts with ₹1.57 Cr outstanding. MEDP supports fashion designing and micro enterprises.',
              icon: Users, color: 'bg-teal-600',
            },
          ].map((obj, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className={`w-9 h-9 ${obj.color} text-white rounded-lg flex items-center justify-center mb-4`}>
                <obj.icon size={18} />
              </div>
              <h4 className="font-semibold text-primary mb-2 text-base">{obj.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{obj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
  },

  programs: {
    title: 'Programs & Activities',
    icon: Heart,
    content: (
      <div className="space-y-12">

        {/* Education */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center">
              <BookOpen size={18} />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Ashakira Orphanage &amp; Poor Children Home</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                The organization runs a home for orphan and poor children in Sindhanur Block, Raichur District, since 2017. 
                At present, 30 children receive free education, lodging and boarding facilities. 
                <span className="font-medium text-primary"> The project runs entirely through organizational funds and local donor contributions</span> — no government or NGO grant is received.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Organization activity started with the Integrated Education for Disabled Children (IEDC) project 
                with financial support by the Ministry of Human Resource Development, New Delhi (MHRD) in the year 2003.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80"
              alt="Children Education"
              className="rounded-2xl h-56 w-full object-cover shadow"
            />
          </div>
        </section>

        {/* Microfinance */}
        <section className="bg-cream rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 bg-green-600 text-white rounded-lg flex items-center justify-center">
              <TrendingUp size={18} />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary">Micro Finance Programme</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Organization works as a Business Correspondent (BC) with NABARD Financial Services Ltd., Bengaluru, 
            providing loan facilities to rural and urban women through SHG/JLG groups. Since 2014, more than 
            120 JLG groups have been linked with ₹1.41 Crore disbursed, and ₹1.57 Crore outstanding with 345 active accounts.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Groups/SHG/JLG Linked', value: '45' },
              { label: 'No. of Beneficiaries', value: '207' },
              { label: 'Disbursement Amount', value: '₹1.41 Cr' },
              { label: 'Outstanding Amount', value: '₹1.57 Cr' },
              { label: 'Outstanding Groups', value: '345' },
              { label: 'Skill Dev. Trainings', value: '20' },
              { label: 'Exposure Visits', value: '02' },
              { label: 'Self-Employed Beneficiaries', value: '200' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <div className="font-heading text-lg font-bold text-accent">{s.value}</div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Health / LWS */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 bg-purple-600 text-white rounded-lg flex items-center justify-center">
              <Stethoscope size={18} />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary">Health Programmes — Link Worker Scheme (LWS)</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Organization is working with Karnataka State AIDS Prevention Society (KSAPS) under the Link Worker Scheme (LWS) 
                at Vijayapur District (2023–24). The project focuses on intensifying HIV/AIDS prevention services for 
                High Risk Groups (HRGs) and expanding IEC services in 100 selected villages.
              </p>
              <h5 className="font-semibold text-gray-700 mb-2 text-sm">Target Groups:</h5>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  'People Living with HIV (PLHIV)',
                  'Female Sex Workers (FSW)',
                  'Injection Drug Users (IDUs)',
                  'Men with Men Sex Workers (MSM)',
                  'Drivers and Truckers',
                  'Antenatal Women (ANC)',
                  'Tuberculosis Patients (TB)',
                ].map((g, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {g}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
                alt="Health Camp"
                className="rounded-2xl h-44 w-full object-cover shadow"
              />
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Health Camps', value: '88' },
                  { label: 'CBS Camps', value: '76' },
                  { label: 'Beneficiaries', value: '6,911' },
                ].map((s, i) => (
                  <div key={i} className="bg-purple-50 rounded-xl p-3 text-center">
                    <div className="font-bold text-purple-700 text-lg">{s.value}</div>
                    <div className="text-gray-500 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LWS Achievements */}
          <div className="mt-6 bg-cream rounded-2xl p-6">
            <h5 className="font-semibold text-primary mb-4">Key Achievements — LWS Project</h5>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: 'IEC Programs Conducted', value: '100' },
                { label: 'School Awareness Programs', value: '63' },
                { label: 'Jata Programmes on HIV', value: '04' },
                { label: 'Wall Writing on HIV/AIDS', value: '08' },
                { label: 'Street Plays', value: '08' },
                { label: 'Blood Donation Camps', value: '02' },
                { label: 'LFU Missing Case Follow-ups', value: '287' },
                { label: 'Index Tests Conducted', value: '201' },
                { label: 'New Positive Cases Linked to ART', value: '41' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="font-bold text-accent text-base min-w-[40px] text-right">{s.value}</div>
                  <div className="text-gray-600 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skill Development */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 bg-amber-600 text-white rounded-lg flex items-center justify-center">
              <TrendingUp size={18} />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary">Skill Development Training &amp; MEDP</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80"
              alt="Skill Training"
              className="rounded-2xl h-56 w-full object-cover shadow"
            />
            <div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Samarpana organized training programmes on tailoring, dairy development, and agriculture for rural and 
                urban women. <strong>250+ farmers, youth and SHG members</strong> — including 48 HIV/AIDS persons — 
                completed training and started their own businesses with MFI support, earning ₹500–₹1,000/day 
                (net income ~₹10,000/month).
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Under the MEDP programme (funded by NABARD), organization selected 5 villages — Dadesugra, Kengal, 
                Kengal Camp, Uppal — where ~30 SHG/JLG groups were trained in fashion designing, Kundan work, 
                patch work, and lace stitching. <strong>25 of 30 members started micro enterprises</strong> earning 
                ₹20,000–₹25,000/month.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Members Trained', value: '250+' },
                  { label: 'Enterprises Started', value: '25' },
                  { label: 'MFI/Bank Loan Linked', value: '₹8 Lakh' },
                  { label: 'Monthly Income Earned', value: '₹20K–25K' },
                ].map((s, i) => (
                  <div key={i} className="bg-amber-50 rounded-xl p-3 text-center border border-amber-100">
                    <div className="font-bold text-amber-700 text-lg">{s.value}</div>
                    <div className="text-gray-500 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Development */}
        <section className="bg-cream rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 bg-teal-600 text-white rounded-lg flex items-center justify-center">
              <Home size={18} />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary">Community Development Programme</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Health on Wheel Programme</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Running for three years at Gunda Gram Panchayath and Kalmangi Panchayathi, this programme 
                conducted <strong>30 medical camps</strong> in different villages with well-trained doctors. 
                A Rural Health Clinic in the Hostel campus at Gunda village has doctors visiting twice a week — 
                nearly <strong>100 ST beneficiaries</strong> benefited from this project annually.
              </p>
              <h4 className="font-semibold text-gray-800 mb-2">Hostel Building for Poor &amp; Orphan Children</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                The organization constructed two rooms for its hostel. One room was built with CSR support from 
                <strong> Tektronix India Pvt. Ltd., Bengaluru</strong> (estimated ₹8,80,000), and another funded 
                by MP Grant (₹3 Lakhs) and MLC Grant (₹2 Lakhs), totalling ₹5 Lakhs.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80"
              alt="Community Development"
              className="rounded-2xl h-56 w-full object-cover shadow"
            />
          </div>
        </section>

      </div>
    )
  },

  management: {
    title: 'Management',
    icon: UserCheck,
    content: (
      <div>
        <p className="text-gray-600 mb-10 max-w-2xl">Our dedicated leadership team steers Samarpana's mission with vision and integrity.</p>

        {/* Leadership hierarchy blocks */}
        <div className="flex flex-col gap-4 mb-8">
          {[
            { role: 'President', color: 'bg-primary text-white' },
            { role: 'General Secretary', color: 'bg-primary-light text-white' },
            { role: 'Programme Manager', color: 'bg-accent text-white' },
            { role: 'Other Staff', color: 'bg-gray-700 text-white' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className={`${item.color} px-8 py-4 rounded-2xl font-semibold text-base w-full max-w-xs text-center shadow-md`}>
                {item.role}
              </div>
            </div>
          ))}
        </div>

        {/* Staff category blocks */}
        <div className="bg-cream rounded-3xl p-6">
          <h4 className="font-heading text-lg font-bold text-primary mb-5">Staff Categories</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { role: 'Programme Staff', color: 'border-primary text-primary' },
              { role: 'Account Officer', color: 'border-primary text-primary' },
              { role: 'Field Staff', color: 'border-accent text-accent' },
              { role: 'Account Assistant', color: 'border-accent text-accent' },
              { role: 'Volunteers', color: 'border-green-600 text-green-700' },
              { role: 'Group D', color: 'border-gray-500 text-gray-600' },
              { role: 'Driver', color: 'border-gray-400 text-gray-500' },
              { role: 'Office Assistant', color: 'border-gray-400 text-gray-500' },
              { role: 'Cook & Attender', color: 'border-gray-400 text-gray-500' },
            ].map((item, i) => (
              <div key={i} className={`bg-white border-2 ${item.color} rounded-xl px-4 py-3 text-center font-medium text-sm shadow-sm`}>
                {item.role}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },

  'org-chart': {
    title: 'Organization Chart',
    icon: GitBranch,
    content: (
      <div className="text-center">
        <p className="text-gray-600 mb-10">Samarpana's organizational structure ensures clear accountability and effective program delivery.</p>
        <div className="bg-cream rounded-3xl p-10 overflow-x-auto">
          <div className="flex flex-col items-center gap-0 min-w-[560px]">

            <div className="bg-primary text-white px-10 py-3 rounded-xl font-bold text-base shadow-md">
              Samarpana Development Organization, Sindhanur
            </div>
            <div className="w-0.5 h-5 bg-gray-400" />

            <div className="bg-white border-2 border-primary text-primary px-8 py-2 rounded-xl font-semibold text-sm shadow">
              Organizational Structure
            </div>
            <div className="w-0.5 h-5 bg-gray-400" />

            <div className="bg-primary text-white px-10 py-3 rounded-xl font-semibold shadow-md">President</div>
            <div className="w-0.5 h-5 bg-gray-400" />

            <div className="bg-primary-light text-white px-10 py-3 rounded-xl font-semibold shadow-md">General Secretary</div>
            <div className="w-0.5 h-5 bg-gray-400" />

            <div className="bg-accent text-white px-10 py-3 rounded-xl font-semibold shadow-md">Programme Manager</div>
            <div className="w-0.5 h-5 bg-gray-400" />

            <div className="bg-gray-700 text-white px-10 py-3 rounded-xl font-semibold shadow-md">Other Staff</div>

            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-gray-500" />
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-500" />
            </div>

            <div className="border-2 border-gray-400 rounded-2xl p-6 w-full max-w-lg bg-white shadow-sm">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-lg text-center">Programme Staff</div>
                <div className="bg-primary/10 text-primary font-semibold text-sm px-4 py-2 rounded-lg text-center">Account Officer</div>
                <div className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-lg text-center">Field Staff</div>
                <div className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-lg text-center">Account Assistant</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-green-50 text-green-700 font-medium text-sm px-4 py-2 rounded-lg text-center">Volunteers</div>
                <div className="bg-gray-50 text-gray-600 text-sm px-4 py-2 rounded-lg text-center">Group D</div>
                <div className="bg-gray-50 text-gray-600 text-sm px-4 py-2 rounded-lg text-center font-medium">
                  Driver, Office Assistant, Cook &amp; Attender
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  },

  team: {
    title: 'Team / HR',
    icon: Users,
    content: (
      <div>
        <p className="text-gray-600 mb-10 max-w-2xl">Our team of passionate professionals and volunteers drives our mission forward every day.</p>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: 'Ramdas M', designation: 'President', dept: 'Leadership' },
            { name: 'Sudha Rao', designation: 'Executive Director', dept: 'Leadership' },
            { name: 'Anil Kumar', designation: 'Program Manager', dept: 'Programs' },
            { name: 'Kavitha S', designation: 'Finance Head', dept: 'Finance' },
            { name: 'Shankar B', designation: 'Field Coordinator', dept: 'Field Ops' },
            { name: 'Priya T', designation: 'HR Manager', dept: 'HR' },
            { name: 'Raju V', designation: 'Community Mobilizer', dept: 'Field Ops' },
            { name: 'Suma K', designation: 'Social Worker', dept: 'Programs' },
          ].map((m, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-primary">{m.name[0]}</span>
              </div>
              <h4 className="font-semibold text-gray-800 text-sm">{m.name}</h4>
              <p className="text-gray-500 text-xs">{m.designation}</p>
              <span className="inline-block mt-2 text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full">{m.dept}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
}

const sectionNav = [
  { key: 'organization', label: 'About Organization', icon: Users },
  { key: 'vision-mission', label: 'Vision & Mission', icon: Eye },
  { key: 'objectives', label: 'Objectives', icon: Target },
  { key: 'programs', label: 'Programs & Activities', icon: Heart },
  { key: 'management', label: 'Management', icon: UserCheck },
  { key: 'org-chart', label: 'Org Chart', icon: GitBranch },
  { key: 'team', label: 'Team / HR', icon: Users },
]

export default function About() {
  const { section = 'organization' } = useParams()
  const current = sections[section] || sections['organization']

  return (
    <div>
      <PageHero
        title="About Us"
        breadcrumb={[{ label: current.title }]}
        bgImage="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm sticky top-24">
              <div className="bg-primary px-5 py-4">
                <h3 className="text-white font-semibold text-sm">About Us</h3>
              </div>
              <ul>
                {sectionNav.map(nav => (
                  <li key={nav.key}>
                    <Link
                      to={`/about/${nav.key}`}
                      className={`flex items-center gap-3 px-5 py-3.5 text-sm border-b border-gray-50 transition-colors
                        ${section === nav.key
                          ? 'bg-accent/10 text-accent font-semibold border-l-4 border-l-accent'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-primary'}`}
                    >
                      <nav.icon size={14} />
                      {nav.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <h2 className="font-heading text-3xl font-bold text-primary mb-8 pb-4 border-b border-gray-100">
                {current.title}
              </h2>
              {current.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}