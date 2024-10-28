curl -fsSL https://bun.sh/install | bash
source /home/ec2-user/.bashrc
sudo yum install cronie -y
sudo systemctl enable crond.service
sudo systemctl start crond.service
bun install
