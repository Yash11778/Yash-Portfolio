import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{ backgroundColor: "#f4f4f5", padding: "40px 0", fontFamily: "Arial, sans-serif" }}>
    <div style={{
      maxWidth: "560px",
      margin: "0 auto",
      backgroundColor: "#ffffff",
      border: "2px solid #000000",
      borderRadius: "0px",
      overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: "#fafafa",
        borderBottom: "2px solid #e4e4e7",
        padding: "24px 32px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}>
        <div style={{
          width: "44px",
          height: "44px",
          backgroundColor: "#facc15",
          border: "2px solid #000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "900",
          fontSize: "20px",
          color: "#000",
          flexShrink: 0,
        }}>
          {fullName.charAt(0).toUpperCase()}
        </div>
        <div>
          <p style={{ margin: 0, color: "#71717a", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>New message from</p>
          <h1 style={{ margin: 0, color: "#18181b", fontSize: "20px", fontWeight: "800" }}>{fullName}</h1>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "32px" }}>
        {/* Sender info */}
        <div style={{
          backgroundColor: "#f4f4f5",
          border: "1.5px solid #e4e4e7",
          padding: "12px 16px",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          <span style={{ fontSize: "12px", color: "#71717a", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: "700" }}>From</span>
          <a href={`mailto:${email}`} style={{ color: "#2563eb", fontWeight: "600", fontSize: "14px", textDecoration: "none" }}>{email}</a>
        </div>

        {/* Message */}
        <p style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#71717a", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700" }}>Message</p>
        <div style={{
          borderLeft: "4px solid #facc15",
          paddingLeft: "16px",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}>
          <p style={{ margin: 0, fontSize: "16px", color: "#18181b", lineHeight: "1.7" }}>{message}</p>
        </div>

        {/* CTA */}
        <div style={{ marginTop: "32px", textAlign: "center" as const }}>
          <a href={`mailto:${email}`} style={{
            display: "inline-block",
            backgroundColor: "#facc15",
            color: "#000000",
            padding: "12px 28px",
            fontWeight: "700",
            fontSize: "14px",
            textDecoration: "none",
            letterSpacing: "0.5px",
            border: "2px solid #000000",
          }}>
            Reply to {fullName}
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: "#f4f4f5", borderTop: "1.5px solid #e4e4e7", padding: "16px 32px", textAlign: "center" as const }}>
        <p style={{ margin: 0, color: "#a1a1aa", fontSize: "12px" }}>
          Sent via your portfolio contact form
        </p>
      </div>
    </div>
  </div>
);
