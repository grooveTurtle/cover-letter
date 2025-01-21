import crypto from "crypto";

export default function getGravatarUrl(
  email: string,
  size: number = 80,
  defaultImage: string = "identicon"
): string {
  const hashedEmail = crypto
    .createHash("md5")
    .update(email.trim().toLowerCase())
    .digest("hex");

  return `https://www.gravatar.com/avatar/${hashedEmail}?s=${size}&d=${defaultImage}`;
}
