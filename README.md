# Metrics

Above is all the code that is used for our Metics site found here: https://metrics.centercentre.com/





Here is a complete list of all the services that make Metrics work:
- Plesk (servers where website is hosted)
- Zapier (handles automations after purchases, sends emails, etc)
- Spiffy (our checkout pages use spiffy plugins to handle payments)
- Active Campaign (where all our customer contact info is stored after purchasing)

## Plesk
The plesk server that runs the site can be found here: https://dopractice.uie.com/smb/web/overview/id/35/type/domain

We use GitHub integration with Plesk to pull code from our repo and it will automatically deploy to server. To do this, click Git icon at link above, pull code from whatever branch you would like (currently using master branch to host most up to date stable code), then click deploy. The site will be live with changes within seconds.

## Zapier
Zapier will handle the automations after a user purchases a Metrics product. There are 4 seperate zaps that handle all the possible purchases a customer can make for metrics. The zaps can be found in the "Metrics" folder found here: https://zapier.com/app/zaps/folder/1453732

The 4 main zaps used are:

- Metrics Fundamentals Purchase (INDIVIDUAL) - https://zapier.com/webintent/edit-zap/217602986
- Metrics Fundamentals Purchase (TEAM) - https://zapier.com/webintent/edit-zap/217597180
- Metrics VIP Purchase (INDIVIDUAL) - https://zapier.com/webintent/edit-zap/217691670
- Metrics VIP Purchase (TEAM) - https://zapier.com/webintent/edit-zap/217700168

The automations execute the following actions in order:

- Catches webhook post from Spiffy (this will include many important details needed for steps throughout the automation)
- Formats the date returned from spiffy into something human friendly (2023-12-06T15:03:21.851Z => Dec 6th, 2023)
- Creates/Updates contacts in Active Campaign with the new tags and adds customers to **2024-metrics-fundamental** or **2024-metrics-ptl** lists. The possible tags added are:

    - 2024-metrics (DEFAULT TAG, ADDED TO ALL CONTACTS AFTER PURCHASE)
    - 2024-metrics-fundamental
    - 2024-metrics-ptl
    - 2024-metrics-fundamental-individual
    - 2024-metrics-fundamental-team
    - 2024-metrics-ptl-individual
    - 2024-metrics-ptl-team

- Sends a receipt email to customer
- Sends a slack message to the channel _loa_intensive_sales_ with details regarding the metrics purchase


## Spiffy
Spiffy handles the payments for all metrics purchases. The 3 checkouts used can be found here:

- Metrics Recordings: https://app.spiffy.co/checkouts/edit/19744
- Metrics Fundamentals: https://app.spiffy.co/checkouts/edit/19430
- Metrics PTL: https://app.spiffy.co/checkouts/edit/19743

Each checkout will have its own products, and each one of these products posts to a seperate zapier webhook endpoint after a purchase is made.

## Active Campaign
AC is used to keep track of all our customers. The main point of AC is to add customers to the correct lists and add tags after each purchase made that correspond with the product they bought. Each zap will handle the adding of tags/lists.
