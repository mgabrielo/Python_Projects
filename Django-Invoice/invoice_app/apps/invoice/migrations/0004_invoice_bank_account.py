# Generated by Django 4.2 on 2023-04-26 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('invoice', '0003_rename_address1_invoice_client_address1_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='invoice',
            name='bank_account',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]