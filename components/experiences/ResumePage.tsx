import React from "react";
import { Baseline } from "./ui/baseline";
import { Container, H1, Section, SectionTitle, SectionContent, Item, Org, Role, Summary, Bullets, Meta, Columns, ContactGrid, ContactItem, ContactLabel, ContactValue, HeaderContact } from "./ui/components";

type ItemT = {
  id?: string;
  org?: string;
  title?: string;
  role?: string;
  project?: string;
  summary?: string;
  details?: string[];
  start?: string;
  end?: string;
  location?: string;
  notes?: string;
  children?: ItemT[];
};

type GroupT = {
  title: string;
  events: ItemT[];
};

type ResumeDataT = {
  seo?: {
    meta_title?: string;
    meta_description?: string;
    keywords?: string[];
  };
  groups: GroupT[];
};

function formatDate(v?: string) {
  if (!v) return "";
  if (v.toLowerCase?.() === "present") return "Present";
  if (/^\d{4}-\d{2}$/.test(v)) {
    const parts = v.split("-");
    if (parts.length >= 2 && parts[0] && parts[1]) {
      const y = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10);
      if (!isNaN(y) && !isNaN(m)) {
        return new Date(y, m-1, 1).toLocaleString(undefined, { month:"short", year:"numeric" });
      }
    }
  }
  if (/^\d{4}$/.test(v)) return v;
  return v;
}

const range = (s?: string, e?: string) => {
  const left = formatDate(s);
  const right = e?.toLowerCase?.() === "present" ? "Present" : formatDate(e);
  if (!left && !right) return "";
  if (left && right) return `${left} – ${right}`;
  return left || right;
};

function parseContactInfo(contactList: string[]) {
  return contactList.map(line => {
    const text = line.trim();
    if (text.includes("Email:")) {
      const email = text.replace("Email:", "").trim();
      return { label: "Email", value: email, href: `mailto:${email}` };
    } else if (text.includes("Tel:")) {
      const tel = text.replace("Tel:", "").trim();
      return { label: "Phone", value: tel, href: `tel:${tel}` };
    } else if (text.includes("LinkedIn:")) {
      const linkedin = text.replace("LinkedIn:", "").trim();
      return { label: "LinkedIn", value: linkedin, href: `https://${linkedin}` };
    } else if (text.includes("GitHub:")) {
      const github = text.replace("GitHub:", "").trim();
      return { label: "GitHub", value: github, href: `https://${github}` };
    } else if (text.includes("Blog:")) {
      const blog = text.replace("Blog:", "").trim();
      return { label: "Blog", value: blog, href: `https://${blog}` };
    } else if (text.includes("Portfolio:")) {
      const portfolio = text.replace("Portfolio:", "").trim();
      return { label: "Website", value: portfolio, href: `https://${portfolio}` };
    } else if (text.includes("Location:")) {
      const location = text.replace("Location:", "").trim();
      return { label: "Location", value: location };
    }
    return { label: "", value: text };
  }).filter(item => item.label && item.value);
}

function formatTitle(title?: string) {
  if (!title) return title;
  
  // Handle specific cases
  const titleMap: Record<string, string> = {
    'technical_projects': 'Technical Projects',
    'business_consulting_projects': 'Business Consulting Projects',
    'professional_experiences': 'Professional Experience',
    'independent_projects': 'Independent Projects',
  };
  
  if (titleMap[title]) {
    return titleMap[title];
  }
  
  // General case: convert snake_case to Title Case
  return title
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function ItemBlock({ it }: { it: ItemT }) {
  const displayTitle = it.org || formatTitle(it.title) || it.project;
  
  return (
    <Item>
      <div>
        <Org>{displayTitle}</Org>
        {it.role && <Role>{it.role}</Role>}
      </div>
      {it.summary && <Summary>{it.summary}</Summary>}
      {Array.isArray(it.details) && it.details.length > 0 && (
        <Bullets>
          {it.details.slice(0,5).map((d: string, i: number) => <li key={i}>{d}</li>)}
        </Bullets>
      )}
      {(it.start || it.end || it.location) && (
        <Meta>
          {[range(it.start, it.end), it.location].filter(Boolean).join(" — ")}
          {it.notes && <div style={{marginTop: 4}}>{it.notes}</div>}
        </Meta>
      )}
      {Array.isArray(it.children) && it.children.length > 0 && (
        <div style={{marginTop: 16, paddingLeft: 24, borderLeft: '2px solid #E5E7EB'}}>
          {it.children.map((sub: ItemT) => (
            <div key={sub.id || Math.random()} style={{marginTop: 24}}>
              <ItemBlock it={sub} />
            </div>
          ))}
        </div>
      )}
    </Item>
  );
}

export default function ResumePage({ data }: { data: ResumeDataT }) {
  // Create a sections object for easier access
  const sections = data.groups.reduce((acc, group) => {
    acc[group.title] = { events: group.events };
    return acc;
  }, {} as Record<string, { events: ItemT[] }>);

  const profile = sections?.profile?.events?.[0];
  const contact = sections?.contact?.events?.[0];
  const contactList = Array.isArray(contact?.details) ? contact.details : [];
  const contactInfo = parseContactInfo(contactList);

  return (
    <>
      <Baseline />
      <Container>
        <header>
          <H1>{profile?.title || "Khemmachart"}</H1>
          {profile?.summary && <Summary>{profile.summary}</Summary>}
        </header>

        {contactInfo.length > 0 && (
          <Section id="contact">
            <SectionTitle>Contact</SectionTitle>
            <SectionContent>
              <ContactGrid>
                {contactInfo.map((item, i) => (
                  <ContactItem key={i}>
                    <ContactLabel>{item.label}</ContactLabel>
                    <ContactValue>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </ContactValue>
                  </ContactItem>
                ))}
              </ContactGrid>
            </SectionContent>
          </Section>
        )}

        {sections?.professional_experiences?.events?.length ? (
          <Section id="experience">
            <SectionTitle>Experience</SectionTitle>
            <SectionContent>
              {sections.professional_experiences.events.map((it: ItemT) => (
                <ItemBlock key={it.id} it={it} />
              ))}
            </SectionContent>
          </Section>
        ) : null}

        {sections?.entrepreneurship?.events?.length ? (
          <Section id="entrepreneurship">
            <SectionTitle>Entrepreneurship</SectionTitle>
            <SectionContent>
              {sections.entrepreneurship.events.map((it: ItemT) => (
                <ItemBlock key={it.id} it={it} />
              ))}
            </SectionContent>
          </Section>
        ) : null}

        {sections?.independent_projects?.events?.length ? (
          <Section id="independent-projects">
            <SectionTitle>Independent Projects</SectionTitle>
            <SectionContent>
              {sections.independent_projects.events.map((it: ItemT) => (
                <ItemBlock key={it.id} it={it} />
              ))}
            </SectionContent>
          </Section>
        ) : null}

        {sections?.education?.events?.length ? (
          <Section id="education">
            <SectionTitle>Education</SectionTitle>
            <SectionContent>
              {sections.education.events.map((it: ItemT) => (
                <ItemBlock key={it.id} it={it} />
              ))}
            </SectionContent>
          </Section>
        ) : null}

      </Container>
    </>
  );
}
