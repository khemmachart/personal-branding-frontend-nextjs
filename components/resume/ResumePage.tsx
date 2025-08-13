import React from "react";
import { Baseline } from "./ui/baseline";
import { Container, H1, Section, SectionTitle, Item, Org, Role, Summary, Bullets, Meta, Columns } from "./ui/components";

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
    const [y,m] = v.split("-").map(Number);
    return new Date(y, m-1, 1).toLocaleString(undefined, { month:"short", year:"numeric" });
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

function ItemBlock({ it }: { it: ItemT }) {
  return (
    <Item>
      <div>
        <Org>{it.org || it.title || it.project}</Org>
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
      {Array.isArray(it.children) && it.children.map((sub: ItemT) => (
        <div key={sub.id || Math.random()} style={{marginLeft: 20, marginTop: 16}}>
          <ItemBlock it={sub} />
        </div>
      ))}
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

  return (
    <>
      <Baseline />
      <Container>
        <header>
          <H1>{profile?.title || "Khemmachart"}</H1>
          {profile?.summary && <Summary>{profile.summary}</Summary>}
          {contactList.length > 0 && (
            <Summary style={{marginTop: 16}}>
              {contactList.map((line: string, i:number) => line.trim())
                .filter(Boolean)
                .map((text: string, i:number) => (
                  <span key={i}>
                    {i > 0 && " • "}
                    {text.includes("Email:") ? (
                      <a href={`mailto:${text.replace("Email:", "").trim()}`}>{text}</a>
                    ) : text.includes("Tel:") ? (
                      <a href={`tel:${text.replace("Tel:", "").trim()}`}>{text}</a>
                    ) : text.includes("LinkedIn:") ? (
                      <a href={`https://${text.replace("LinkedIn:", "").trim()}`}>{text}</a>
                    ) : text.includes("GitHub:") ? (
                      <a href={`https://${text.replace("GitHub:", "").trim()}`}>{text}</a>
                    ) : text.includes("Blog:") ? (
                      <a href={`https://${text.replace("Blog:", "").trim()}`}>{text}</a>
                    ) : text.includes("Portfolio:") ? (
                      <a href={`https://${text.replace("Portfolio:", "").trim()}`}>{text}</a>
                    ) : text}
                  </span>
                ))
              }
            </Summary>
          )}
        </header>

        {sections?.professional_experiences?.events?.length ? (
          <Section id="experience">
            <SectionTitle>Experience</SectionTitle>
            {sections.professional_experiences.events.map((it: ItemT) => (
              <ItemBlock key={it.id} it={it} />
            ))}
          </Section>
        ) : null}

        {sections?.education?.events?.length ? (
          <Section id="education">
            <SectionTitle>Education</SectionTitle>
            {sections.education.events.map((it: ItemT) => (
              <ItemBlock key={it.id} it={it} />
            ))}
          </Section>
        ) : null}

        {sections?.independent_projects?.events?.length ? (
          <Section id="independent-projects">
            <SectionTitle>Independent Projects</SectionTitle>
            {sections.independent_projects.events.map((it: ItemT) => (
              <ItemBlock key={it.id} it={it} />
            ))}
          </Section>
        ) : null}

        {sections?.entrepreneurship?.events?.length ? (
          <Section id="entrepreneurship">
            <SectionTitle>Entrepreneurship</SectionTitle>
            {sections.entrepreneurship.events.map((it: ItemT) => (
              <ItemBlock key={it.id} it={it} />
            ))}
          </Section>
        ) : null}
      </Container>
    </>
  );
}
