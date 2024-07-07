# Variables
$resourceGroupName = "example-resources"
$location = "East US"
$storageAccountName = "examplestorageacct$(Get-Random)"
$skuName = "Standard_LRS"
$kind = "StorageV2"
$accessTier = "Hot"

# Create Resource Group if it doesn't exist
$resourceGroup = Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue
if (-not $resourceGroup) {
    $resourceGroup = New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create Storage Account
$storageAccount = New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                                         -Name $storageAccountName `
                                         -Location $location `
                                         -SkuName $skuName `
                                         -Kind $kind `
                                         -AccessTier $accessTier

# Output the storage account name
Write-Host "Storage account '$storageAccountName' created successfully."