import { notification } from "antd"
import copy from "copy-to-clipboard"

export const copyToClipboard = async (text: string) => {
  try {
    if (navigator?.clipboard) {
      await copy(text, null)
    } else {
      await navigator.clipboard.writeText(text)
    }
    notification["success"]({
      message: "Copy success",
    })
  } catch (e) {
    notification["error"]({
      message: "copy not found",
      description: "please throw admin",
    })
  }
}

export const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace one or more spaces with single hyphen
    .replace(/[^a-z0-9\u0E00-\u0E7F-]/g, '') // Remove any characters that are not letters, numbers, Thai characters, or hyphens
    .replace(/-+/g, '-') // Replace multiple consecutive hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading and trailing hyphens
}
