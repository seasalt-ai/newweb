const e=`---
title: "The Right Way to Batch Send SMS to Contacts in Excel, Google Sheets, and Apple Numbers"
metatitle: "SMS Batch Send | Excel, Google Sheets, Apple Numbers"
date: 2023-10-01 10:25:00-08:00
draft: false
author: Xuchen Yao
description: "Learn the safest ways to batch send SMS from Excel, Google Sheets, and Apple Numbers while staying 10DLC compliant."
weight: 1
tags:
  - SeaX
  - Tutorial
image: images/blog/35-how-to-send-bulk-sms-spreadsheet/35-how-to-send-bulk-sms-spreadsheet.jpg
canonicalURL: /blog/how-to-send-bulk-sms-spreadsheet/
url: /blog/how-to-send-bulk-sms-spreadsheet/
---

Sending out bulk SMS to a list of contacts has been a widely used technique for businesses, event organizers, and various professionals. The ability to send a message en masse can save time and help keep contacts informed. While Excel, Google Sheets, and Apple Numbers are not inherently built to send SMS, extensions and third-party services have come to the rescue to make this possible. However, there are pitfalls to be aware of.

# Be Compliant: 10DLC Registration

The world of bulk SMS is not as straightforward as it once was, especially with the rise of regulations designed to combat spam and unsolicited messages. If you only want to do this once and aren't concerned about facing regulatory consequences, go ahead and use the tutorials you found online that teach you how to send bulk SMS messages using a plugin. However, if you intend to run a sustainable business and marketing campaigns, you should first familiarize yourself with the rules surrounding SMS marketing.

Central to these regulations is the 10DLC system.

10DLC stands for 10-Digit Long Code, and it's the new standard for A2P (Application-to-Person) SMS messaging in the US. Here's what you need to know:

- Purpose: Due to a rise in spam and unsolicited messages, carriers introduced strict regulations surrounding the use of 10DLC for bulk messaging.
- Business Compliance: Businesses wishing to send bulk SMS messages must register their 10DLC and get it approved. This ensures that they adhere to carrier regulations.
- Risks of Non-compliance: Sending SMS without properly registering or using an approved 10DLC can lead to bans or other consequences.

Here is an [article](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-) that shows you how to register for 10DLC campaign. Seasalt.ai helped many [SeaX Messaging](https://seax.seasalt.ai/?utm_source=blog) customers become 10DLC compliant. If you have any questions, feel to reach out to us.

# Prepare Your Contacts in Spreadsheets

Now that you set up your 10DLC campaign, you can start bulk messaging your customers without worrying about getting banned.

Let's start with a simple scenario: you have a list of contacts saved in an spreadsheet, and you want to send them all an SMS for an upcoming event. The spreadsheet could be in various formats. The most common formats are Excel, Google Sheets, and Apple Numbers. You will need to clean up the phone numbers in your spreadsheet first.

Let's use Google Sheet as an example. The steps for other spreadsheet formats will be very similar. Here is a step by step guide on how to do that.

## 1. Make a Backup of your data

Make a copy of your contacts ensures you don't lose any contact data if you mess up. Here is how: **Click on \`File\` > \`Make a copy\`**.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/1-make-a-copy-for-bulk-sms-contact-spreadsheet.png" alt="Make a backup copy for your bulk SMS contact spreadsheet"/>

_Make a backup copy for your bulk SMS contact spreadsheet_

</center>

## 2. Duplicate Data Removal

a. Highlight the entire dataset.

b. Click on \`Data\` > \`Data cleanup\` > \`Remove duplicates\`.

c. Select the columns you want to check for duplicates, then click \`Remove duplicates\`.

d. Google Sheets will notify you of how many duplicates were removed.

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/2-remove-duplicates-for-bulk-sms-contact-spreadsheet.png" alt="Remove duplicate records for your bulk SMS contact spreadsheet"/>

_Remove duplicate records for your bulk SMS contact spreadsheet_

</center>

## 3. Standardize Phone Number Format

a. Decide on a consistent format. Check on the phone number format required by the service you are using. For example, SeaX Messaging accepts a variety of phone format such as 5551234567 or 555-123-4567 or +15551234567.

b. Use \`Find and Replace\` to make formatting consistent. For example, replace all periods with dashes.

c. Use custom formulas or scripts if necessary to ensure all numbers are consistent. This might require more advanced spreadsheet skills

<center>
<img src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/
3-clean-numbers-for-bulk-sms-contact-spreadsheet.png" alt="Standardize phone number format for your bulk SMS contact spreadsheet"/>

_Standardize phone number format for your bulk SMS contact spreadsheet_

</center>

### 4. Validate Data Entries

a. For phone numbers, ensure all have the correct number of digits. Filter or sort the data to identify anomalies.

b. For names, look out for entries that might be blank or filled with irrelevant data.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/
4-validate-format-for-bulk-sms-contact-spreadsheet.jpeg" alt="Validate data entries for your bulk SMS contact spreadsheet"/>

_Validate data entries for your bulk SMS contact spreadsheet_

</center>

## 5. Check for Blank Cells

This step is optional. On SeaX Messaging, we automatically skip a row if the cells are empty. However, not all providers or tools will like blank cells. We highly recommend you perform this data cleaning step, but it is optional for SeaX Messaging.

### Here is how:

a. Highlight your data range.

b. Click on \`Format\` > \`Conditional formatting\`.

c. Set the format cells if to \`Cell is empty\` and choose a highlight color.

d. This will allow you to easily spot and address blank cells.

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/
5-clean-blank-cells-for-bulk-sms-contact-spreadsheet.png" alt="Check blank cells in your bulk SMS contact spreadsheet"/>

_Check blank cells in your bulk SMS contact spreadsheet_

</center>

## More on Preparing Contact Data

Remember, data cleaning is an iterative process. Depending on the size and quality of your dataset, you may need to revisit and repeat these steps multiple times. Always make sure to double-check your work to ensure accuracy.

## Start Sending SMS!

While Excel or Google Sheets doesn’t natively support SMS, there are several third-party extensions and add-ons that can bridge this gap. Some popular choices include:

- ClickSend: Offers SMS gateways and integrates well with spreadsheet programs.
- Zapier: An integration tool that can connect Google Sheets to SMS services.

However, if you are serious about SMS Marketing or even omni-channel marketing using various messaging platforms like WhatsApp and Facebook Messenger, we recommend using a dedicated SMS messaging platform. These platforms allow you to organize contacts, communicate directly through chats and calls, track performance, and cultivate long-term relationships with customers. Reputable SMS services maintain a better rapport with carriers, ensuring more reliable message delivery. They also offer customer support for 10DLC registration and education to ensure you remain compliant.

A few popular SMS messaging service providers are:

- SeaX Messaging
- Simple Texting
- Textedly

# How to Run Successful Text Marketing Operations

<center>
<img height="500" src="/images/blog/35-how-to-send-bulk-sms-spreadsheet/
6-successful-camapign-bulk-sms-contact-spreadsheet.jpeg" alt="Success in text marketing"/>

</center>

Even with the best intentions, issues can arise. Here are a few ways to run successful text marketing operations in long term.:

- Stay Informed: Regularly review 10DLC requirements and ensure ongoing compliance.
- Ensure Message Quality: Avoid spam-like content, include mandatory opt-out options, and adhere to all carrier and regional rules.
- Choose Reputable SNS Services: Third-party SMS services have better knowledge about 10DLC compliance rules and also may have better rapport with carriers, ensuring more reliable message delivery.

# Conclusion

Sending batch SMS to contacts in spreadsheet tools like Excel, Google Sheets, and Apple Numbers can be a highly efficient communication method. But with the introduction of regulations like 10DLC, it's essential to approach this task with caution and due diligence. By understanding 10DLC first, you can navigate the world of bulk SMS more confidently and effectively.

## Get in touch

If you’re interested in learning more about 10DLC or learn more about your options for SMS marketing, [book a demo](https://meetings.hubspot.com/seasalt-ai/seasalt-meeting) with us. We are always happy to chat!
`;export{e as default};
